import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const DonutDetails = ({ route }) => {
  const { donut } = route.params;
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: donut.imageUrl }} style={styles.image} />
      <View style={styles.foodDetails}>
        <Text style={styles.foodName}>{donut.name}</Text>
      </View>
      <View style={styles.desciptionPrice}>
        <Text style={styles.foodDescription}>{donut.description}</Text>
        <Text style={styles.foodPrice}>${donut.price}</Text>
      </View>
      <View style={styles.deliveryContainer}>
        <View style={styles.deliveryTime}>
          <Text style={styles.deliveryLabel}>🕒 Delivery in</Text>
          <Text style={styles.deliveryText}>30 min</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={handleDecrease}
            style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity
            onPress={handleIncrease}
            style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.restaurantInfoContainer}>
        <Text style={styles.restaurantInfoTitle}>Restaurants info</Text>
        <Text style={styles.restaurantInfoText}>
          Order a Large Pizza but the size is the equivalent of a medium/small
          from other places at the same price range.
        </Text>
      </View>

      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartButtonText}>Add to cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 40,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  foodDetails: {
    marginTop: 20,
  },
  foodName: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  foodDescription: {
    fontSize: 16,
    color: 'gray',
    flex: 1,
  },
  foodPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  deliveryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  deliveryTime: {
    flexDirection: 'column',
  },
  deliveryLabel: {
    fontSize: 14,
    color: 'gray',
  },
  deliveryText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 20,
  },
  quantityButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    height: 40,
    width: 30,
    borderRadius: 10,
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  restaurantInfoContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  restaurantInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  restaurantInfoText: {
    fontSize: 18,
    color: 'gray',
    marginTop: 5,
  },
  addToCartButton: {
    marginTop: 30,
    backgroundColor: '#FFD700',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  addToCartButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  desciptionPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default DonutDetails;
