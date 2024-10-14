import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DrinkItem = ({ item, updateQuantity }) => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateQuantity(item, newQuantity);
  };

  const decrementQuantity = () => {
    const newQuantity = quantity > 0 ? quantity - 1 : 0;
    setQuantity(newQuantity);
    updateQuantity(item, newQuantity);
  };

  return (
    <View style={styles.drinkItem}>
      <Image source={{ uri: item.image_url }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.drinkName}>{item.name}</Text>
        <Text style={styles.drinkPrice}>${item.price}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={decrementQuantity}>
          <Ionicons name="remove-circle-outline" size={24} color="#4CAF50" />
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPress={incrementQuantity}>
          <Ionicons name="add-circle-outline" size={24} color="#4CAF50" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DrinksScreen = () => {
  const [drinksData, setDrinksData] = useState([]);
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await fetch('https://670c8c017e5a228ec1d09fab.mockapi.io/Shop/Drink_Shop');
        const data = await response.json();
        setDrinksData(data[0].drinks); 
      } catch (error) {
        console.error('Error fetching drinks:', error);
      }
    };

    fetchDrinks();
  }, []);

  const updateQuantity = (drink, quantity) => {
    const updatedDrinks = selectedDrinks.filter(item => item.id !== drink.id);
    if (quantity > 0) {
      updatedDrinks.push({ ...drink, quantity });
    }
    setSelectedDrinks(updatedDrinks);
  };

  const goToCart = () => {
    navigation.navigate('OrderScreen', { selectedDrinks });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back-outline" size={24} color="#333" />
        <Text style={styles.title}>Drinks</Text>
        <Ionicons name="search-outline" size={24} color="#333" />
      </View>

      <FlatList
        data={drinksData}
        renderItem={({ item }) => <DrinkItem item={item} updateQuantity={updateQuantity} />}
        keyExtractor={item => item.id}
      />

      <TouchableOpacity style={styles.cartButton} onPress={goToCart}>
        <Text style={styles.cartButtonText}>GO TO CART</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  drinkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  drinkName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  drinkPrice: {
    fontSize: 14,
    color: '#757575',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 100,
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 10,
  },
  cartButton: {
    backgroundColor: '#FFC107',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    margin: 10,
  },
  cartButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DrinksScreen;
