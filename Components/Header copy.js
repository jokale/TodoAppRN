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
  input: {
      marginBottom: 10,
      paddingHorizontal: 8,
      paddingVertical:6,
      borderBottomWidth: 1,
      borderBottomColor: 'purple',
  }

});