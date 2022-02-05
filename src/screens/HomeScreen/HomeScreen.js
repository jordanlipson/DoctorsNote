import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

export default function HomeScreen() {
    const makeDailyLog = () => {

    }

    const getName = () => {

    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Text style={styles.titleText}>Hello {`${getName()}`}</Text>
                <Text style={styles.text}>Add a daily log:</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => makeDailyLog()}>
                    <Text style={styles.buttonTitle}>Log my day</Text>
                </TouchableOpacity>
                
                <Reminder text={'Reminder Test 1'} />

                
            </KeyboardAwareScrollView>
        </View>
    )





}