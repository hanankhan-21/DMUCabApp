import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Image
} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { goToAuthChoice } from './helpers';


console.log('goToAuthChoice loaded:', typeof goToAuthChoice);


const LoginScreen = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add Firebase login or validation here
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={styles.logo}
      />

      <View style={styles.inputWrapper}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email address"
          style={styles.input}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputWrapper}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="*** Password"
          style={styles.input}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>FORGOTTEN PASSWORD?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.outlinedButton}
        onPress={() => goToAuthChoice(navigation)}
       >
       <Text style={styles.outlinedButtonText}>Create a new Account</Text>
       </TouchableOpacity>

    </View>
  );
};

export default LoginScreen;
