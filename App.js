import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LogScreen, ProfileScreen, ReminderScreen, LoginScreen, SignupScreen } from './src/screens';
import { firebase } from './src/firebase/config';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false}} name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen options={{ headerShown: false}} name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Reminders" component={ReminderScreen} />
          <Stack.Screen name="Log" component={LogScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  homeWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {},
});
