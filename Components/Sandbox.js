import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Sandbox(){

    return (
        <View style={styles.container}>
        <Text style={styles.boxOne}>Joanna</Text>
        <Text style={styles.boxTwo}>Joann</Text>
        <Text style={styles.boxThree}>Joan</Text>
        <Text style={styles.boxFour}> Joa</Text>
    

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: 'coral',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    boxOne: {
        flex: 2,
        backgroundColor: 'pink',
        padding:10,
    },
    boxTwo:{
        flex: 5,

        backgroundColor: '#FFF5C2',
        padding:20,
    },

    boxThree:{
        flex: 1,

        backgroundColor: '#F5C2FF',
        padding:30,
    },

    boxFour:{
        flex: 1,

        backgroundColor: '#C2CCFF',
        padding:40,
    },

});