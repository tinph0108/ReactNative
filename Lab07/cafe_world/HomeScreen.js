import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const CafeApp = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to Cafe world</Text> 

      <Image 
        source={{ uri: 'https://i.postimg.cc/Z5Dxdm84/cf7473f16b029a5683363d6a96c8daeb.png' }} 
        style={styles.image}
      />

      <Image 
        source={{ uri: 'https://i.postimg.cc/zfbSwQ7W/dfbb52e32e73fb31128ce70ef7e29ff5.png' }} 
        style={styles.image}
      />

      <View style={styles.imagePlaceholder} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ShopsScreen')}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6EBF2',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 100, 
    marginVertical: 10,
    borderRadius: 10,
  },
  imagePlaceholder: {
    width: 250,
    height: 100,
    backgroundColor: '#E0E0E0', 
    borderRadius: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#00CFFF',
    padding: 15,
    borderRadius: 30,
    marginTop: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CafeApp;