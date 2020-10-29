import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

// placing item as a prop to ensure that i can have access to it 
//when i import the todo prop
export default function Todo({item, pressHandler}) {

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#C2FFF5',
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
        
    },
  

});