import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>LOGIN</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity
          style={styles.eyeButton}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          <Icon name={isPasswordVisible ? "eye" : "eye-slash"} size={20} color="grey" />
        </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.infoText}>When you agree to terms and conditions</Text>
      <Text style={styles.linkText}>Forgot your password?</Text>
      <Text style={styles.orText}>Or login with</Text>
      <View style={styles.socialButtons}>
        <Icon.Button name="facebook" backgroundColor="#3b5998">
          <Text style={styles.socialText}></Text>
        </Icon.Button>
        <Icon.Button name="google" backgroundColor="#DD4B39">
          <Text style={styles.socialText}></Text>
        </Icon.Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8efde',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#c9e0d0'
  },
  button: {
    backgroundColor: 'red',
    width: '80%',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 14,
    marginBottom: 10,
  },
  linkText: {
    color: 'blue',
    marginBottom: 10,
  },
  orText: {
    fontSize: 14,
    color: 'black',
    marginVertical: 10,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  socialText: {
    color: 'white',
  },
  eyeButton: {
    position: 'absolute',
    right: 10,
    marginBottom: 85,
    marginRight: 50
  }
});

export default LoginScreen;
