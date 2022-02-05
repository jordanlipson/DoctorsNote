import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Reminder = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                {/* 
                <Image style={styles.itemImage} source={{uri: ''}}></Image>
                */}
                <Text style={styles.itemText}>(props.text)</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,

    },
    itemLeft: {
        
    },
    itemText: {},
    circular: {},
});

export default Reminder;