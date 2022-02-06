import React, { useState } from 'react'
import { Image, Text, View } from 'react-native';

export default function HomeScreen() {
    const getName = () => {
        
        return "";
    }

    const getAge = () => {

        return "";
    }

    const getLocation = () => {

        return "";
    }

    const getEmail = () => {

        return "";
    }

    
    const getPersonalData = () => {
        let data = [];
        data.push({key: "Age: " + {getAge}});
        data.push({key: "Location: " + {getLocation}});
        data.push({key: "Email: " + {getEmail}});
        return data;
    }

    const getMedicalHistory = () => {
        // return value should be in array of objects; each illness is stored as single string value of key per object
        // i.e. one object per illness 
        return [];
    }

    const getMedication = () => {
        // return value should be in array of objects; each mediaction is stored as single string value of key per object
        // i.e. one object per illness 
        return [];
    }
    
    const styles = StyleSheet.create({
        container: {
         flex: 1,
         paddingTop: 22
        },
        item: {
          paddingHorizontal: 20,
          paddingVertical: 0.5,
          fontSize: 14,
          height: 30,
        },
        title: {
          paddingHorizontal: 20,
          fontSize: 18,
          height: 30,
          fontWeight: 'bold'
        },
        name: {
          paddingTop: 0,
          fontSize: 25,
          height: 30,
          fontWeight: 'bold'
        },  
        imgcontainer: {
          paddingTop: 50,
          paddingBottom: 50,
          alignItems: 'center',
        },
        imageStyle: {
          width: 150,
          height: 150,
          borderRadius: 150 / 2,
          overflow: "hidden",
          borderWidth: 3
        }
    });
      
    return (
        <View style={styles.container}>
            <View style={styles.imgcontainer}>
            <Image
            source={{
            uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS6HtMDneH4Pq_g1xMxIfwWUVKNsV63LbpSJn7G-L_vwnMJEl7D',
            headers: {
                Accept: '*/*',
                },
            }}
            style={styles.imageStyle}
            />
            <Text style={styles.name}>{getName}</Text>
            </View>
            
            <Text style={styles.title}>Personal Information</Text>
            <FlatList
            data = {getPersonalData}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
            <Text style={styles.title}>Medical History</Text>
            <FlatList
            data= {getMedicalHistory}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
            <Text style={styles.title}>Medications</Text>
            <FlatList
            data= {getMedication}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />

        </View>
    );
}

export default FlatListBasics;