import React, { useState } from 'react'
import { Image, Text, View } from 'react-native';
import { FlatList } from "react-native";
import { firebase } from '../../firebase/config';
import { getDatabase, ref, child, get } from "../../../node_modules/firebase/database";
import styles from './styles';
import Menu from '../../../components/NavBar';

export default function HomeScreen() {
    // const [userInfo, setUserInfo] = useState([]);
    // const usersCollectionRef = collection(firebase.firestore.collection("users"))

//     useEffect(()=>{
//         const

//         getUsers();
//     })
//     firebase.firestore()
//    .collection("users")
//    .doc(firebase.auth().currentUser.uid)
//    .get() 
//    .then((snapshot) => { 
//      if (snapshot.exists) 
//        { setUserInfo(snapshot.data()); 
//        }
//      })

    

    

    const getName = () => {
        // let name = db.collection('users').where("email", "==", user.email).select('name').get();
        // return name;
    }

    const getAge = () => {

        return user.age;
    }

    const getLocation = () => {

        return user.location;
    }

    const getEmail = () => {

        return user.email;
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
        return user.medicalhistory;
    }

    const getMedication = () => {
        // return value should be in array of objects; each mediaction is stored as single string value of key per object
        // i.e. one object per illness 
        return user.medication;
    }
    
      
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
            <Text style={styles.name}>Personal Info</Text>
            </View>
            
            <Text style={styles.title}>Personal Info</Text>
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
            <Menu></Menu>

        </View>
    );
}

//export default FlatListBasics;