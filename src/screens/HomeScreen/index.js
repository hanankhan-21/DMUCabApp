import React, { useEffect } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { navigateToAuthChoice } from './helpers';

const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigateToAuthChoice(navigation);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoCard}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <ActivityIndicator size="large" color="#7a0000" style={{ marginTop: 30 }} />
    </View>
  );
};

export default HomeScreen;
