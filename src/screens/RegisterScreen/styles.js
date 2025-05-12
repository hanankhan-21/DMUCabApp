import { StyleSheet } from 'react-native';

const styles =  StyleSheet.create({

  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 30,
    textAlign: 'left',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: '#4dd0e1', // Teal-like underline
    marginBottom: 25,
    paddingBottom: 6,
  },
  icon: {
    fontSize: 18,
    marginRight: 10,
    color: '#555',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 6,
    color: '#000',
  },
  button: {
    backgroundColor: '#7a0000',
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
    elevation: 2,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});


export default styles;