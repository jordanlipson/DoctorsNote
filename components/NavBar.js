import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Image, TextInput, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { HomeScreen, LogScreen, ProfileScreen, ReminderScreen } from '../src/screens';
import { Button } from 'react-native-web';


function GoHome({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}>
                    <Text>Home</Text>
        </TouchableOpacity>
      </View>
    );
}

function GoLog() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Home')}>
                      <Text>Home</Text>
          </TouchableOpacity>
        </View>
      );
}

function GoReminder() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Home')}>
                      <Text>Home</Text>
          </TouchableOpacity>
        </View>
      );
}

function GoProfile({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
                      onPress={() => navigation.navigate('Profile')}>
                      <Text>Home</Text>
          </TouchableOpacity>
        </View>
      );
}

const Tabs = createBottomTabNavigator();

Menu = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={GoHome} />
            <Tabs.Screen name="Log" component={GoLog} />
            <Tabs.Screen name="Reminders" component={GoReminder} />
            <Tabs.Screen name="Profile" component={GoProfile} />
        </Tabs.Navigator>
    );
}
  
// Menu = () => {
//     return (
//         <NavigationContainer>
//         <Navbar />
//         </NavigationContainer>
//     );
// }
  

export default Menu;