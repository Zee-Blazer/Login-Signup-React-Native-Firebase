import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Firebase
import firebase from 'firebase/compat/app';

const Stacks = createStackNavigator();

// Imported screens
import { HomeScreen } from './src/Screens/home.screen';
import { LoginScreen } from './src/Screens/login.screen';
import { SignupScreen } from './src/Screens/signup.screen';

export default function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyDluSteoZR4YCiwB_uF21zKM4RF0BkHnVw",
    authDomain: "practice-login-b5c02.firebaseapp.com",
    projectId: "practice-login-b5c02",
    storageBucket: "practice-login-b5c02.appspot.com",
    messagingSenderId: "805741122983",
    appId: "1:805741122983:web:7ac6dd36515b715730d282",
    measurementId: "G-7DYQE1LQBH"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  else{
    firebase.app();
  }

  return (
    <NavigationContainer>
      <Stacks.Navigator 
        screenOptions={{
          headerShown: false
        }}
      >
        <Stacks.Screen name="Home" component={ HomeScreen } />
        <Stacks.Screen name="Login" component={ LoginScreen } />
        <Stacks.Screen name="Signup" component={ SignupScreen } />
      </Stacks.Navigator>
    </NavigationContainer>
  );
}
