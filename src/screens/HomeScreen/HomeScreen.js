import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';


export default function HomeScreen({navigation}) {
    const makeDailyLog = () => {
        navigation.navigate('Log')

    }

    const setReminder = () => {
        navigation.navigate('Reminders')
    }

    const checkProfile = () => {
        navigation.navigate('Profile')
    }

    const getName = () => {

    }

    return (
        <View style={styles.container} backgroundcolor="#C4D0BF">
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../images/DoctorsNoteLogo.webp')}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => makeDailyLog()}>
                    <Text style={styles.buttonTitle}>Log my day</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setReminder()}>
                    <Text style={styles.buttonTitle}>Set or check reminders</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => checkProfile()}>
                    <Text style={styles.buttonTitle}>Check Profile</Text>
                </TouchableOpacity>                
            </KeyboardAwareScrollView>
        </View>
    )





}