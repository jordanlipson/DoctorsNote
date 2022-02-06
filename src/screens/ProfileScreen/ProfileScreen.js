import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, Image, StatusBar } from "react-native";
const getName = () => {
        return "Shreya Voore";
    }

    const getAge = () => {
        return "18";
    }

    const getLocation = () => {
        return "Ottawa, ON";
    }

    const getEmail = () => {
        return "shreya.voore@gmail.com";

    }
    const getMedicalHistory = () => {

        return ['Size','six','feet'];
    }

    const getMedication = () => {
        return ['slayful','orthopedics'];
    }

const DATA = [
  {
    title: "Personal information",
    data: [getName(), getAge(), getLocation(), getEmail()]
  },
  {
    title: "Medical History",
    data: getMedicalHistory()
  },
  {
    title: "Medication",
    data: getMedication()
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
         flex: 1,
         paddingTop: 90,
         paddingBottom: 90,
         paddingLeft: 10,
        //  alignContent: 'center',
      alignItems: 'center',
    backgroundColor: '#C4D0BF'

  },
  imgcontainer: {
    width: 100,
    height: 58,
    paddingTop: 50,
    paddingBottom: 50,
    marginBottom: 30,
    alignItems: 'center',
  },
  item: {
    padding: 3,
    marginHorizontal: 16,
    borderRadius: 16,
    backgroundColor: 'white',
    borderColor: '#C0C0C0'
  },
  header: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: "#ffe",
    color: "#71826A"
  },
  title: {
    textAlign: 'center',
    fontSize: 14,
    color: '#8E9B89'
  }
});

const pfp = () => (
  <SafeAreaView style={styles.container}>
  <Image
  style={styles.imgcontainer} 
  source= {require('../../images/pfp.webp')}
  />
    <SectionList style={styles.item}
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
    <Menu></Menu>
  </SafeAreaView>
);

export default pfp;