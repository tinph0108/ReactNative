import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';

const API_Screen_01 = ({ navigation }) => {
  const [name, setName] = useState('');

  const handleGetStarted = () => {
    if (name) {
      navigation.navigate('TaskScreen', { name });
    }
  };

  return (
    <View style={styles.container}>
     <Image
        source={{ uri: 'https://i.postimg.cc/T3YrTGCv/f6ee0953600008083c32857b2d79ab5e.png' }}
        style={styles.logo}
      />
      <Text style={styles.title}>MANAGE YOUR TASK</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TaskScreen', {name: name })}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  input: { width: '80%', padding: 10, borderWidth: 1, marginBottom: 20 },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
   logo: {
     width: 300,
    height: 300,
    marginBottom: 40
  },
});

export default API_Screen_01;
