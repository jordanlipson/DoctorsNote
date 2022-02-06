import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
//import { wrapScrollView, useScrollIntoView } from 'react-native-scroll-into-view';

const Replace = (props) => {

  return (
    <View style={styles.item}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text style={styles.itemText}>{props.text}</Text>
        <Text style={styles.itemAmount}>Take 1 table in the morning</Text> 
        <Text style={styles.itemFreq}>Every day</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 30,
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,

  },
  itemText: {
    fontWeight: 'bold',
    maxWidth: '100%',
    fontSize: 20,
  },
  itemAmount: {
    maxWidth: '100%',
    fontSize: 15, 
  },
  itemFreq: {
    maxWidth: '100%',
    fontSize: 15, 
  },
});

export default Replace;
//export default Reminder;