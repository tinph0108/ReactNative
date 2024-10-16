import React, { useState } from 'react';
import {View,Text,TouchableOpacity,Image,StyleSheet,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductDetail = ({ route }) => {
  const { bicycle } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageStyle}> 
      <Image source={bicycle.image} style={styles.image} />
      </View>
      <View style={styles.bicycleDetails}>
        <Text style={styles.bicycleName}>{bicycle.name}</Text>
      </View>
      <View style={styles.desciptionPrice}>
        <Text style={styles.bicyclePrice1}><Text>{bicycle.percent}% OFF |</Text> ${bicycle.price}</Text>
        <Text style={styles.bicyclePrice}>${bicycle.priceOff}</Text>
      </View>
      

      <View style={styles.bicycleInfoContainer}>
        <Text style={styles.bicycleInfoTitle}>Description</Text>
        <Text style={styles.bicycleInfoText}>{bicycle.description}</Text>
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
    backgroundColor: '#fff',
  },
  imageStyle:{
    backgroundColor: '#E941411A',
    paddingHorizontal: 30,
    paddingVertical: 30,
    width: '100%'
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
 bicycleDetails: {
    marginTop: 20,
    marginLeft: 10,
  },
  bicycleName: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  
  bicyclePrice: {
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 100,
     textDecorationLine: 'line-through',
  },
   bicyclePrice1: {
    fontSize: 22,
    marginLeft: 10,
    color: '#00000099',

  },
  bicycleInfoContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  bicycleInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bicycleInfoText: {
    fontSize: 18,
    color: 'gray',
    marginTop: 5,
  },
  addToCartButton: {
    marginTop: 30,
    backgroundColor: '#FFD700',
    padding: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,    
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

export default ProductDetail;
