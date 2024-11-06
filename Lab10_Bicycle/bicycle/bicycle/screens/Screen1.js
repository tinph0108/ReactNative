import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

export default function Screen1({ navigation }) {
  const handleNavigation = () => {
    navigation.navigate('Screen2');
  };

  const handleAdminNavigation = () => {
    navigation.navigate('Admin');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        A premium online store for{'\n'} sporter and their stylish choice
      </Text>
      <View style={styles.imageContainer}>
        <Image style={styles.img} source={require('../assets/xe1.png')} />
      </View>
      <Text style={styles.power}>
        POWER BIKE{'\n'}SHOP
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleNavigation}>
        <Text style={styles.getstarted}>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.adminButton} onPress={handleAdminNavigation}>
        <Text style={styles.adminText}>Go to Admin</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 50,
    fontSize: 15,
  },
  imageContainer: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#E941411A',
    borderRadius: 10,
    marginBottom: 20,
  },
  img: {
    width: 280,
    height: 260,
    alignContent: 'center',
    resizeMode: 'contain',
  },
  power: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    padding: 10,
    backgroundColor: 'red',
    width: '80%',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 15,
  },
  getstarted: {
    color: 'white',
  },
  adminButton: {
    padding: 10,
    backgroundColor: 'blue',
    width: '80%',
    alignItems: 'center',
    borderRadius: 50,
  },
  adminText: {
    color: 'white',
  },
});
