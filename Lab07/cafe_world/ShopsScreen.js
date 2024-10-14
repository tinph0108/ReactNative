import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ShopItem = ({ item }) => {
  const navigation = useNavigation();
  
  const handlePress = () => {
    if (item.available) {
      navigation.navigate('DrinksScreen', { shopId: item.id });
    } else {
      alert('This shop is temporarily unavailable.');
    }
  };

  return (
    <TouchableOpacity style={styles.shopItem} onPress={handlePress}>
      <Image source={{ uri: item.imageUrl }} style={styles.shopImage} />
      <View style={styles.shopDetails}>
        <View style={styles.shopStatusContainer}>
          <Text style={item.available ? styles.statusText : styles.statusUnavailableText}>
            {item.available ? '✔️ Accepting Orders' : '🔒 Temporary Unavailable'}
          </Text>
          <Ionicons name="time-outline" size={16} color="#757575" style={styles.icon} />
          <Text style={styles.deliveryTime}>{item.time}</Text>
          <Ionicons name="location-outline" size={18} color="#757575" style={styles.icon} />
        </View>
        <Text style={styles.shopName}>{item.name}</Text>
        <Text style={styles.addressText}>{item.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ShopsScreen = () => {
  const [shopsData, setShopsData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await fetch('https://670c8c017e5a228ec1d09fab.mockapi.io/Shop/Shops');
        const data = await response.json();
        setShopsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchShops();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}> 
          <Ionicons name="arrow-back-outline" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Shops Near Me</Text>
        <Ionicons name="search-outline" size={24} color="#333" />
      </View>

      <FlatList
        data={shopsData}
        renderItem={({ item }) => <ShopItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  shopItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  shopImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  shopDetails: {
    marginTop: 10,
  },
  shopName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  shopStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 5,
  },
  statusText: {
    fontSize: 18,
    color: '#4CAF50',
    marginRight: 10,
  },
  statusUnavailableText: {
    fontSize: 16,
    color: '#FF5722',
    marginRight: 10,
  },
  deliveryTime: {
    fontSize: 18,
    color: '#757575',
    marginRight: 50,
  },
  addressText: {
    fontSize: 14,
    color: '#757575',
    marginTop: 5,
  },
  icon: {
    marginRight: 5,
  },
});

export default ShopsScreen;
