import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';

const foodData = [
  {
    id: '1',
    name: 'Tasty Donut',
    description: 'Spicy tasty donut family',
    price: '$10.00',
    image: 'https://picsum.photos/200', 
  },
  {
    id: '2',
    name: 'Pink Donut',
    description: 'Spicy tasty donut family',
    price: '$20.00',
    image: 'https://picsum.photos/200',
  },
  {
    id: '3',
    name: 'Floating Donut',
    description: 'Spicy tasty donut family',
    price: '$30.00',
    image: 'https://picsum.photos/200',
  },
  {
    id: '4',
    name: 'Tasty Donut',
    description: 'Spicy tasty donut family',
    price: '$10.00',
    image: 'https://picsum.photos/200', 
  },
];

const FoodApp = () => {
  const [selectedCategory, setSelectedCategory] = useState('Donut');

  const renderItem = ({ item }) => (
    <View style={styles.foodItem}>
      <Image source={{ uri: item.image }} style={styles.foodImage} />
      <View style={styles.foodDetails}>
        <Text style={styles.foodName}>{item.name}</Text>
        <Text style={styles.foodDescription}>{item.description}</Text>
        <Text style={styles.foodPrice}>{item.price}</Text>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, Jala!</Text>

      <Text style={styles.title}>Choice you Best food</Text>

      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search food" />
      </View>

      <View style={styles.tabsContainer}>
        <TouchableOpacity 
          style={[styles.tabButton, selectedCategory === 'Donut' && styles.activeTab]} 
          onPress={() => setSelectedCategory('Donut')}
        >
          <Text style={styles.tabText}>Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tabButton, selectedCategory === 'Pink Donut' && styles.activeTab]} 
          onPress={() => setSelectedCategory('Pink Donut')}
        >
          <Text style={styles.tabText}>Pink Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tabButton, selectedCategory === 'Floating' && styles.activeTab]} 
          onPress={() => setSelectedCategory('Floating')}
        >
          <Text style={styles.tabText}>Floating</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={foodData} 
        renderItem={renderItem} 
        keyExtractor={item => item.id} 
        style={styles.foodList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
    marginTop: 35,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: '#FFD700',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  foodList: {
    flexGrow: 1,
  },
  foodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE4E1',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
  },
  foodImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 15,
  },
  foodDetails: {
    flex: 1,
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  foodDescription: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 5,
  },
  foodPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#FFA500',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default FoodApp;
