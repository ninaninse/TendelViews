import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { useState, useEffect } from 'react';

// Her importeres Firebase Service
import { getApps, initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { FlatList } from './components/HomeScreen';


// Her importeres compenterne der fra components mappe
import StackNavigator from './components/StackNavigator';
import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import ProfileScreen from './components/ProfileScreen';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

// Firebase config (fra min firebase)
const firebaseConfig = {
  apiKey: "AIzaSyAifdYqvVimFuhDHBJd__MbZXLuHqnWipE",
  authDomain: "fir-projekt-7f7b7.firebaseapp.com",
  projectId: "fir-projekt-7f7b7",
  storageBucket: "fir-projekt-7f7b7.appspot.com",
  messagingSenderId: "747042670286",
  appId: "1:747042670286:web:3ce707ac7d029be55bf29f"
};

// Firebase setup
export default function App() {
  const [user, setUser] = useState({ loggedIn: false });

  // Her initialiseres Firebase
  if (getApps().length < 1) {
    initializeApp(firebaseConfig);
    console.log('Firebase On!');
    // Her initialiseres andre Firebase produkter
  } else {
    console.log('Firebase not on!');
  }

  const auth = getAuth();

  function onAuthStateChange(callback) {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        // Brugeren er signed in her 
        const uid = user.uid;
        callback({ loggedIn: true, user: user });
        console.log('You are logged in!');
      } else {
        // Brugeren er signed out her
        callback({ loggedIn: false });
      }
    });
  }

  // Her aktiveres listener ved brug af onAuthStateChanged, så man dynamisk kan observere om brugeren er aktiv eller ej
  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  // Guest component content ift. sign-up and login siderne kan ses her
  const GuestPage = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Sign up or Login to Tendel
        </Text>

        <Card style={{ padding: 20, margin: 20 }}>
          <SignUpForm />
        </Card>

        <Card style={{ padding: 20, margin: 20 }}>
          <LoginForm />
        </Card>
      </View>
    );
  };

  // Her kreeres en tab navigator instance.
  const Tab = createBottomTabNavigator();

  // Her ses tekst referencer for screen components
  const homeScreenText = 'Dette er HomeScreen!';
  const settingsScreenText = 'Dette er SettingsScreen!';

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: [
            {
              display: 'flex',
            },
            null,
          ],
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Home') {
              return (
                <Ionicons name={'home-outline'} size={size} color={color} />
              );
            } else if (route.name === 'Settings') {
              return (
                <Ionicons
                  name="md-settings-outline"
                  size={size}
                  color={color}
                />
              );
            } else {
              return (
                <Ionicons name="md-list-outline" size={size} color={color} />
              );
            }
          },
        })}
      >
        {user.loggedIn ? (
          <>
            <Tab.Screen name="Home" children={() => <SettingsScreen prop={settingsScreenText} />} />
            <Tab.Screen name="Clubs" children={() => <HomeScreen prop={homeScreenText} />} />
            <Tab.Screen name="Overview" component={StackNavigator} />
          </>
        ) : (
          <Tab.Screen name="Guest" component={GuestPage} />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Her kommer stylingen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});