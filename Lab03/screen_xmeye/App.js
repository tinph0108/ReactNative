import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://png.pngtree.com/png-vector/20220520/ourmid/pngtree-green-iris-eyeball-mockup-png-image_4657821.png' }}
        style={styles.logo}
      />
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#999" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Please input user name"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#999" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Please input password"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <Text style={styles.linkText}>Register</Text>
        <Text style={styles.linkText}>Forgot Password</Text>
      </View>

      
      <Text style={styles.otherMethodsText}>Other Login Methods</Text>

      <View style={styles.socialButtons}>
        <Icon.Button name="user-plus" backgroundColor="#4285F4">
          <Text style={styles.socialText}></Text>
        </Icon.Button>
        <Icon.Button name="wifi" backgroundColor="#FFD300">
          <Text style={styles.socialText}></Text>
        </Icon.Button>
        <Icon.Button name="facebook" backgroundColor="#3B5998">
          <Text style={styles.socialText}></Text>
        </Icon.Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  loginButton: {
    backgroundColor: '#4285F4',
    width: '80%',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },
  linkText: {
    color: 'black',
    marginTop: 5
  },
  otherMethodsText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  socialText: {
    color: 'white',
  },
});

export default LoginScreen;
