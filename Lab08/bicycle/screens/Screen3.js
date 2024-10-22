import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';

const Screen3 = ({ route }) => {
  const { bike } = route.params;
  
  const [isHearted, setIsHearted] = useState(bike.heart);

  const toggleHeart = async () => {
    setIsHearted(!isHearted); 
    
    try {
      await axios.put(`https://671001f7a85f4164ef2cc4c3.mockapi.io/api/bike/${bike.id}`, {
        ...bike,
        heart: !isHearted,
      });
    } catch (error) {
      console.error("Error updating heart:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={getImage(bike.image)} style={styles.image} />
      </View>
      <Text style={styles.title}>{bike.name}</Text>
      <Text>{bike.discount}% OFF ${bike.originalPrice}</Text>
      <Text style={styles.price}>${bike.price}</Text>
      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>{bike.description}</Text>

      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={toggleHeart} style={styles.heartIconContainer}>
          <MaterialIcons
            name="favorite-border"
            size={30}
            color={isHearted ? 'red' : 'gray'}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    backgroundColor: '#E941411A',
    padding: 5,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  heartIconContainer: {
    padding: 10,
  },
  addToCartButton: {
    backgroundColor: '#f77f00',
    padding: 15,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginRight: 20,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Screen3;
