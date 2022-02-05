import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen, LogScreen, ProfileScreen, ReminderScreen, LoginScreen } from './src/screens';
import Reminder from './components/Reminder';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Home Screen */}
      <View style={styles.homeWrapper}>
        <Text style={styles.sectionTitle}>How today?</Text>
        
        <View style={styles.items}>
          {/* This is where the day's reminders will be displayed */}
          <Reminder text={'Reminder Test 1'} />
        </View>

      </View>

    </View>
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
