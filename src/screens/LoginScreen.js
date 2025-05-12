// src/screens/HomeScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // ✅ required for icons


const HomeScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

/*  const handleLogin = () => {
    // TODO: Replace with Firebase or API login later
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill in both fields.');
    } else {
      console.log('Logging in with:', email, password);
      navigation.navigate('AuthChoice'); // or any other screen
    }
  };*/

 
  return (
  <View style={styles.container}>
    <Image
      source={require('../../assets/images/logo_car.png')}
      style={styles.logo}
      resizeMode="contain"
    />

    <View style={styles.inputContainer}>
      <MaterialIcons name="email" size={20} color="#555" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Email address"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
    </View>

    <View style={styles.inputContainer}>
      <MaterialIcons name="lock" size={20} color="#555" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
    </View>

    <TouchableOpacity style={styles.loginButton} >
      <Text style={styles.loginText}>Login</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
      <Text style={styles.forgotText}>FORGOTTEN PASSWORD?</Text>
    </TouchableOpacity>

    {/* Spacer to push the bottom button down */}
    <View style={{ flex: 0.5 }} />

    <TouchableOpacity
      style={styles.createButton}
      onPress={() => navigation.navigate('Signup')}
    >
      <Text style={styles.createText}>Create a new Account</Text>
    </TouchableOpacity>
  </View>
);

};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 120,
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#aaa',
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 5,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#000',
  },
  loginButton: {
    backgroundColor: '#8B0000', // dark red
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 4,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotText: {
    marginTop: 15,
    fontSize: 14,
    color: '#000',
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  createButton: {
  marginTop: 20,
  paddingVertical: 14,
  paddingHorizontal: 20,
  borderRadius: 30,
  borderWidth: 1.5,
  borderColor: '#8B0000',
  width: '100%', // 🔴 Make it full-width
  alignItems: 'center',
  justifyContent: 'center',
},
createText: {
  color: '#8B0000',
  fontSize: 16,
  fontWeight: 'bold',
  letterSpacing: 0.5,
},

});