import React from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

const OrderItem = ({ item }) => {
  return (
    <View style={styles.orderItem}>
      <Image source={{ uri: item.image_url }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.drinkName}>{item.name}</Text>
        <Text style={styles.drinkPrice}>${item.price}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity>
          <Ionicons name="remove-circle-outline" size={24} color="#4CAF50" />
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity>
          <Ionicons name="add-circle-outline" size={24} color="#4CAF50" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const OrderScreen = () => {
  const route = useRoute();
  const { selectedDrinks } = route.params;

  const calculateTotal = () => {
    return selectedDrinks.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back-outline" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.title}>Your orders</Text>
        <Ionicons name="search-outline" size={24} color="#333" />
      </View>

      <View style={styles.orderCard}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>CAFE DELIVERY</Text>
          <Text style={styles.cardPrice}>$5</Text>
        </View>
        <Text style={styles.cardSubTitle}>Order #18</Text>
      </View>
      <View style={[styles.orderCard, { backgroundColor: '#9B51E0' }]}>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>CAFE DELIVERY</Text>
          <Text style={styles.cardPrice}>${calculateTotal()}</Text>
        </View>
        <Text style={styles.cardSubTitle}>Order #18</Text>
      </View>

      <FlatList
        data={selectedDrinks}
        renderItem={({ item }) => <OrderItem item={item} />}
        keyExtractor={item => item.id}
      />

      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>PAY NOW</Text>
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
  orderCard: {
    backgroundColor: '#00BDD6',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardPrice: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardSubTitle: {
    color: '#FFF',
    fontSize: 14,
    marginTop: 5,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
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
    width: 80,
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  payButton: {
    backgroundColor: '#FFC107',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    margin: 15,
  },
  payButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OrderScreen;