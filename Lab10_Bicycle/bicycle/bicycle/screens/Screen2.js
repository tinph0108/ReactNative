import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBikes, toggleHeart } from '../redux/bikeSlice'; // Import toggleHeart

const categories = ['All', 'Roadbike', 'Mountain'];

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

const Screen2 = ({ navigation }) => {
  const dispatch = useDispatch();
  const { list: bikes, loading, error } = useSelector((state) => state.bikes);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    dispatch(fetchBikes());
  }, [dispatch]);

  const filteredBikes = bikes.filter(bike => 
    selectedCategory === 'All' ? true : bike.type === selectedCategory
  );

  if (loading) {
    return <ActivityIndicator size="large" color="blue" />; 
  }

  if (error) {
    return <Text>Error fetching data...</Text>; 
  }

  const handleNavigation = (bike) => {
    navigation.navigate('Screen3', { bike });
  };

  const handleToggleHeart = (id) => {
    dispatch(toggleHeart(id)); // Dispatch toggleHeart để cập nhật trạng thái "tim"
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>The world's Best Bike</Text>

      <View style={styles.filterContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={styles.filterButton}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={[
              styles.filterButtonText,
              selectedCategory === category && styles.activeFilterButton,
            ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredBikes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bikeCard}>
            <TouchableOpacity onPress={() => handleToggleHeart(item.id)} style={styles.heartIcon}>
              <MaterialIcons
                name={item.heart ? "favorite" : "favorite-border"}
                size={24}
                color={item.heart ? "red" : "gray"}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNavigation(item)}>
              <Image source={getImage(item.image)} style={styles.bikeImage} />
              <Text style={styles.bikeName}>{item.name}</Text>
              <Text style={styles.bikePrice}>$ {item.price}</Text>
            </TouchableOpacity>
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'red',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  filterButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'pink',
  },
  activeFilterButton: {
    color: 'red',
  },
  filterButtonText: {
    fontSize: 14,
    color: '#bbbbbb',
  },
  bikeCard: {
    flex: 1,
    margin: 10,
    backgroundColor: '#E941411A',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    position: 'relative',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  bikeImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  bikeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bikePrice: {
    fontSize: 14,
    color: 'black',
  },
});

export default Screen2;
