import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { toggleHeart } from '../redux/bikeSlice';

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

const Screen3 = ({ route }) => {
  const { bike } = route.params;
  const dispatch = useDispatch();
  const [isHearted, setIsHearted] = useState(bike.heart);

  const handleToggleHeart = () => {
    setIsHearted(!isHearted);
    dispatch(toggleHeart({ id: bike.id, currentHeartState: isHearted }));
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
        <TouchableOpacity onPress={handleToggleHeart} style={styles.heartIconContainer}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
