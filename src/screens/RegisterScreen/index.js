import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Alert, ScrollView
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import { handleRegister } from './helpers';
console.log('Register styles loaded:', typeof styles?.container);


const RegisterScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const role = route.params?.role || 'passenger';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    await handleRegister({
      name, email, phone, password, role, navigation
    });
  };
return (
  <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>Welcome!</Text>
    <Text style={styles.subtitle}>Create a new account.</Text>

    <View style={styles.inputWrapper}>
      <Text style={styles.icon}>👤</Text>
      <TextInput
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
    </View>

    <View style={styles.inputWrapper}>
      <Text style={styles.icon}>✉️</Text>
      <TextInput
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
    </View>

    <View style={styles.inputWrapper}>
      <Text style={styles.icon}>📞</Text>
      <TextInput
        placeholder="Phone Number (+441234567891)"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
        keyboardType="phone-pad"
      />
    </View>

    <View style={styles.inputWrapper}>
      <Text style={styles.icon}>🔒</Text>
      <TextInput
        placeholder="*** Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
    </View>

    <View style={styles.inputWrapper}>
      <Text style={styles.icon}>🔒</Text>
      <TextInput
        placeholder="*** Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
      />
    </View>

    <TouchableOpacity style={styles.button} onPress={onSubmit}>
      <Text style={styles.buttonText}>Register</Text>
    </TouchableOpacity>
  </ScrollView>
);

};

export default RegisterScreen;
