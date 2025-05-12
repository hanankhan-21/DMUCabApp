import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { goToRegister } from './helpers';
import { useNavigation } from '@react-navigation/native';

const AuthChoiceScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/logo_car.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Choose Account Type</Text>
      <Text style={styles.subtitle}>Are you registering as a driver or passenger?</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => goToRegister(navigation, 'driver')}
      >
        <Text style={styles.buttonText}>Register as Driver 🚗</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => goToRegister(navigation, 'passenger')}
      >
        <Text style={styles.buttonText}>Register as Passenger 👤</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthChoiceScreen;
