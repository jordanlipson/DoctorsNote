import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Home = (props) =>  {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
      </View>
    );
}

const Log = (props) =>  {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
        <Text>Log</Text>
      </View>
    );
}

const Reminders = (props) =>  {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Reminder</Text>
      </View>
    );
}

const Profile = (props) =>  {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile</Text>
      </View>
    );
}

const Tabs = createBottomTabNavigator();

Navbar = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={Home} />
            <Tabs.Screen name="Log" component={Log} />
            <Tabs.Screen name="Reminders" component={Reminders} />
            <Tabs.Screen name="Profile" component={Profile} />

        </Tabs.Navigator>
    );
}
  
App = () => {
    return (
        <NavigationContainer>
        <Navbar />
        </NavigationContainer>
    );
}
  

export default App;