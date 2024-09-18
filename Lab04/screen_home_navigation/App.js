import * as React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://cdn.viettelstore.vn/Images/Product/ProductImage/1412734899.jpeg' }} style={styles.productImage} />
      <Text style={styles.productName}>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>★★★★★</Text>
        <Text style={styles.ratingCmt}> (Xem 828 đánh giá)</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>1.790.000 đ</Text>
        <Text style={styles.originalPrice}>2.290.000 đ</Text>
      </View>
      <View style={styles.contractContainer}>
        <Text style={styles.contract}>Ở đâu rẻ hơn hoàn tiền</Text>
        <FontAwesome name="question-circle-o" size={24} style={styles.iconQuestion} color="black" />
      </View>
      <TouchableOpacity style={styles.colorButton} onPress={() => alert('Mở chọn màu')}>
        <Text style={styles.colorButtonText}>4 MÀU-CHỌN MÀU</Text>
        <FontAwesome name="chevron-right" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.buyButton} onPress={() => alert('Bắt đầu mua')}>
  <Text style={styles.buyButtonText}>CHỌN MUA</Text>
</TouchableOpacity>


    </View>
     
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  productImage: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  productName: {
    fontSize: 20,
    marginBottom: 10
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  rating: {
    fontSize: 18,
    color: 'gold',
  },
  ratingCmt: {
    fontSize: 18,
    color: 'black',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  price: {
    fontSize: 18,
    color: 'black',
    marginBottom: 5
  },
  originalPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    color: 'grey',
    marginBottom: 5,
    marginLeft: 10
  },
  contractContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  contract: {
    fontSize: 18,
    color: 'red',
    textTransform: 'uppercase',
  },
  iconQuestion: {
    marginLeft: 10
  },
  colorButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: '#D1D1D1',
    borderRadius: 25,
    marginTop: 20,
  },
  colorButtonText: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
  },
  buyButton: {
  backgroundColor: '#FF0000', 
  paddingHorizontal: 10,
  paddingVertical: 15,
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  marginTop: 50
},
buyButtonText: {
  color: '#FFFFFF',
  fontSize: 16,
  fontWeight: 'bold',
},

});

export default App;
