import { Alert } from 'react-native';
import { auth, db } from '../../config/firebase';

export const handleRegister = async ({ name, email, phone, password, role, navigation }) => {
  console.log('Register data:', { name, email, phone, password, role });
console.log('Firebase Auth Connected:', auth?.name); // Should log 'FirebaseAuthImpl'

  // 👉 This is where Firebase Auth & Firestore logic will go
  // When ready: createUserWithEmailAndPassword + setDoc()

  // For now, just simulate success:
  Alert.alert('Registration Successful', `Registered as ${role}`);
  navigation.replace('Login');
};
