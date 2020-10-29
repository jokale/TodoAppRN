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
        height: 80,
        paddingTop: 30,
        backgroundColor: '#F5C2FF'
    },
    title: {
        textAlign: "center",
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
    }

});