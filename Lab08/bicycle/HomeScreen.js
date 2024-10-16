import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import bicycle from './image/bicycle.png'
const HomeScreen = ({ navigation }) => {

 

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> A premium online store for sporter and their stylish choice
       </Text>
       <View  style={styles.imageContainer}> 
       <Image
        source={bicycle}
        style={styles.image}
        resizeMode="contain"
        />
       </View>
       <Text style={styles.name}> POWER BIKE {'\n'} SHOP
       </Text>
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProductBicycle')} >
        <Text style={styles.buttonText}>Get started</Text>
       </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center' ,   
    backgroundColor: '#f8f8f8'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50
  },
  imageContainer: {
    backgroundColor: '#E941411A',
    padding: 15,
    borderRadius: 30,
    marginTop: 10
  },
  image: {
    width: 350,
    height: 350, 
    marginVertical: 10,
    marginHorizontal: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#E94141',
    padding: 15,
    borderRadius: 30,
    marginTop: 40,
    width: '80%'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    alignContent: 'center',
    textAlign: 'center'
  },
});

export default HomeScreen;
