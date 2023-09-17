import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react';
import { getAuth, signOut } from 'firebase/auth'; // Her importeres Firebase authentication funktioner

function SettingsScreen({ navigation }) {
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      // Her kommer Sign out fra brugeren, herved Firebase authentication
      await signOut(auth);

      // Efter et succesfuldt logout, så navigeres brugeren til login 
      navigation.navigate('Login'); 
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Tendel!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

export default SettingsScreen;

// Lokal styling af SettingsScreen
const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingBottom: 100,
    borderColor: 'pink',
    borderWidth: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100%',
  },
  text: {
    fontSize: 20,
  },
});