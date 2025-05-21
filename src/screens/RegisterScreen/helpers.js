import { Alert } from 'react-native';
import { auth, app, db } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';



 const handleRegister = async ({ name, email, phone, password, role, navigation }) => {
  console.log('Registering:', { name, email, phone, role });

  try {
    // Step 1: Register user with Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    // Step 2: Save user data to Firestore
    const userRef = doc(db, 'users', uid);
    await setDoc(userRef, {
      userId: uid,
      name,
      email,
      phone,
      role,
      createdAt: new Date().toISOString(),
      driverAccountIsActive: role === 'driver' ? false : null,
      passengerAccountIsActive: role === 'passenger' ? true : null,
    });

    // Step 3: Redirect based on role
    if (role === 'driver') {
      Alert.alert('Success', 'Registered as Driver. Proceed to upload documents.');
       navigation.replace('DocumentsUpload'); 
;
    } else {
      Alert.alert('Success', 'Registered successfully.');
      navigation.replace('LoginScreen');
    }

  } catch (error) {
    console.error('Registration Error:', error.message);
    Alert.alert('Error', error.message);
  }

};

  export default handleRegister;
