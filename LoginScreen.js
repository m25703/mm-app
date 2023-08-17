import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here (e.g., API call)
    console.log('Login clicked');
    console.log('Username:', username);
    console.log('Password:', password);
    
    // Simulate successful login for demo purposes
    const isAuthenticated = true;
    if (isAuthenticated) {
      // Navigate to the home screen upon successful login
      navigation.navigate('Home');
    }
  };


  return (
    <ImageBackground
      source={require('./lbi.jpg')} // Provide the path to your background image
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
          activeOpacity={0.7}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Use an rgba color for a semi-transparent background
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: 'rgba(47,47,47,1)',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default LoginScreen;
