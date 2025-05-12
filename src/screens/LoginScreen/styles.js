import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25,
    justifyContent: 'center',
  },
  logo: {
    width: 160,
    height: 80,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 40,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 16,
    paddingVertical: 8,
  },
  loginButton: {
    backgroundColor: '#7a0000',
    paddingVertical: 14,
    borderRadius: 6,
    marginTop: 20,
    alignItems: 'center',
    elevation: 2,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotPassword: {
    marginTop: 15,
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: '600',
    fontSize: 13,
    color: '#000',
  },
  outlinedButton: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#7a0000',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
  },
  outlinedButtonText: {
    color: '#7a0000',
    fontWeight: '600',
    fontSize: 14,
  },
});
export default styles;

