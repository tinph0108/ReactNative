import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Image, ScrollView, Alert, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBikes, addBike, deleteBike, updateBike } from '../redux/bikeSlice';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const getImage = (imagePath) => {
  switch (imagePath) {
    case 'xe1.png':
      return require('../assets/xe1.png');
    case 'xe2.png':
      return require('../assets/xe2.png');
    case 'xe3.png':
      return require('../assets/xe3.png');
    case 'xe4.png':
      return require('../assets/xe4.png');
    default:
      return require('../assets/xe4.png');
  }
};

const AdminScreen = () => {
  const dispatch = useDispatch();
  const { list: bikes, loading, error } = useSelector((state) => state.bikes);

  const [formData, setFormData] = useState({ name: '', price: '', type: '', image: '', description: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    dispatch(fetchBikes());
  }, [dispatch]);

  const showAlert = (title, message) => {
    if (Platform.OS === 'web') {
      window.alert(`${title}: ${message}`);
    } else {
      Alert.alert(title, message);
    }
  };

  const handleAddOrUpdateBike = () => {
    // Kiểm tra đầu vào
    if (!formData.name || !formData.price || !formData.type || !formData.image || !formData.description) {
      showAlert('Error', 'Please fill out all fields');
      return;
    }

    if (isNaN(formData.price) || Number(formData.price) <= 0) {
      showAlert('Error', 'Please enter a valid price');
      return;
    }

    // Thêm hoặc Cập nhật xe đạp
    if (isEditing) {
      dispatch(updateBike({ ...formData, id: editingId }));
      setIsEditing(false);
      setEditingId(null);
    } else {
      dispatch(addBike(formData));
    }

    // Xóa form sau khi xử lý
    setFormData({ name: '', price: '', type: '', image: '', description: '' });
  };

  const handleEdit = (bike) => {
    setFormData({
      name: bike.name,
      price: bike.price,
      type: bike.type,
      image: bike.image,
      description: bike.description,
    });
    setIsEditing(true);
    setEditingId(bike.id);
  };

  const handleDelete = (id) => {
    dispatch(deleteBike(id));
  };


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Admin - Bike Management</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Bike Name"
          value={formData.name}
          onChangeText={(text) => setFormData({ ...formData, name: text })}
          style={styles.input}
        />
        <TextInput
          placeholder="Price"
          value={formData.price}
          onChangeText={(text) => setFormData({ ...formData, price: text })}
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Type"
          value={formData.type}
          onChangeText={(text) => setFormData({ ...formData, type: text })}
          style={styles.input}
        />
        <TextInput
          placeholder="Image Filename (e.g., xe1.png)"
          value={formData.image}
          onChangeText={(text) => setFormData({ ...formData, image: text })}
          style={styles.input}
        />
        <TextInput
          placeholder="Description"
          value={formData.description}
          onChangeText={(text) => setFormData({ ...formData, description: text })}
          style={[styles.input, styles.descriptionInput]}
          multiline
        />
        <Button title={isEditing ? "Update Bike" : "Add Bike"} onPress={handleAddOrUpdateBike} color="#28a745" />
      </View>

      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}

      <FlatList
        data={bikes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bikeItem}>
            <Image source={getImage(item.image)} style={styles.bikeImage} resizeMode='contain' />
            <View style={styles.bikeInfo}>
              <Text style={styles.bikeName}>{item.name}</Text>
              <Text style={styles.bikePrice}>${item.price}</Text>
              <Text style={styles.bikeDescription}>{item.description}</Text>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity onPress={() => handleEdit(item)} style={styles.iconButton}>
                <MaterialIcons name="edit" size={24} color="#007bff" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.iconButton}>
                <MaterialIcons name="delete" size={24} color="#dc3545" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f4f4f8',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  descriptionInput: {
    height: 60,
    textAlignVertical: 'top',
  },
  bikeItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bikeImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  bikeInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  bikeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  bikePrice: {
    fontSize: 16,
    color: '#28a745',
  },
  bikeDescription: {
    fontSize: 14,
    color: '#666',
  },
  actions: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 10,
  },
});

export default AdminScreen;
