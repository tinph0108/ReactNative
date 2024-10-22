import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import useFetch from '../hooks/useFetch'; 
import { useFocusEffect } from '@react-navigation/native';

const categories = ['All', 'Roadbike', 'Mountain'];
const API_URL = 'https://671001f7a85f4164ef2cc4c3.mockapi.io/api/bike'; 

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
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { data: bikes, loading, error, refetch } = useFetch(API_URL); 

  useFocusEffect(
    React.useCallback(() => {
      refetch();  
    }, [refetch])
  );

  const filteredBikes = bikes.filter(bike => 
    selectedCategory === 'All' ? true : bike.type === selectedCategory
  );

  if (loading) {
    return <ActivityIndicator size="large" color="blue" />; 
  }

  if (error) {
    return <Text>Error fetching data...</Text>; 
  }

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
          <TouchableOpacity
            style={styles.bikeCard}
            onPress={() => navigation.navigate('Screen3', { bike: item })}
          >
            <MaterialIcons
              name="favorite"
              size={24}
              color={item.heart ? 'red' : 'gray'}
              style={styles.heartIcon}
            />
            <Image source={getImage(item.image)} style={styles.bikeImage} />
            <Text style={styles.bikeName}>{item.name}</Text>
            <Text style={styles.bikePrice}>$ {item.price}</Text>
          </TouchableOpacity>
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
