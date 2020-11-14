import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header(){

    return (
        <View style={styles.header}>
            <Text style={styles.title}>My To Do List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        paddingTop: 50,
        backgroundColor: '#1B76BE'
    },
    title: {
        textAlign: "center",
        color: 'white',
        fontSize: 40,
        fontWeight: "bold",
    }

});