import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image,FlatList  } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';

const bikes = [
  { id: 1, name: 'Pinarello', price: '1800', image: require('./image/bicycle.png'), description: 'aaa',priceOff: '100', percent: '15', catefory: 'moutain' },
  { id: 2, name: 'Pina Mountai', price: '1700', image: require('./image/bicycle2.png'), description: 'aaa',priceOff: '100', percent: '15',catefory: 'moutain'},
  { id: 3, name: 'Pina Bike', price: '1500', image: require('./image/bicycle3.png'), description: 'aaa',priceOff: '100', percent: '15', catefory: 'moutain' },
  { id: 4, name: 'Pinarello', price: '1900', image: require('./image/bicycle4.png'), description: 'aaa',priceOff: '100', percent: '15', catefory: 'moutain' },
  { id: 5, name: 'Pinarello', price: '2700', image: require('./image/bicycle3.png'), description: 'aaa',priceOff: '100', percent: '15', catefory: 'moutain' },
  { id: 6, name: 'Pinarello', price: '1350', image: require('./image/bicycle4.png'), description: 'aaa',priceOff: '100', percent: '15', catefory: 'road' },
  { id: 7, name: 'Pinarello', price: '1350', image: require('./image/bicycle4.png'), description: 'aaa',priceOff: '100', percent: '15', catefory: 'road' },
  { id: 8, name: 'Pinarello', price: '1350', image: require('./image/bicycle4.png'), description: 'aaa',priceOff: '100', percent: '15', catefory: 'road' },
  { id: 9, name: 'Pinarello', price: '1350', image: require('./image/bicycle4.png'), description: 'aaa',priceOff: '100', percent: '15', catefory: 'road' },
  { id: 10, name: 'Pinarello', price: '1350', image: require('./image/bicycle4.png'), description: 'aaa',priceOff: '100', percent: '15', catefory: 'road' },
];

const HomeScreen = ({ navigation }) => {
   const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.bikeCard} onPress={() => {
      navigation.navigate('ProductDetail', {
        bicycle: {
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          description: item.description,
          priceOff: item.priceOff,
          percent: item.percent,
          catefory: item.catefory
        }
      })
    }} >
      <View style={styles.iconContainer}>
        <FontAwesome name="heart-o" size={20} />
      </View>
      <Image source={item.image} style={styles.bikeImage} />
      <Text style={styles.bikeName}>{item.name}</Text>
      <Text style={styles.bikePrice}><Text style={{color: '#F7BA83'}}>$</Text>{item.price}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>The world’s Best Bike</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.activeButton]}>
          <Text style={styles.buttonTextActive}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Mountain</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={bikes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} 
        numColumns={2} 
        columnWrapperStyle={styles.row} 
        contentContainerStyle={styles.bikeContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#E94141',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  button: {
    padding: 8,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#E9414187',
  },
  activeButton: {
    borderColor: '#E9414187',
    backgroundColor: 'pink'
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
  },
  buttonTextActive: {
    fontSize: 16,
    textAlign: 'center',
  },
  bikeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 20,
    
  },
  bikeCard: {
    width: '49%',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#E941411A',
  },
  bikeImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  bikeName: {
    fontSize: 16,
    marginTop: 10,
    color: '#00000099',
  },
  bikePrice: {
    fontSize: 16,
    color: '#black',
    marginTop: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
});

export default HomeScreen;