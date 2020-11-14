import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
// placing item as a prop to ensure that i can have access to it 
//when i import the todo prop
export default function Todo({item, pressHandler}) {

    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <Text style={styles.itemText}>{item.text}</Text>         
              <MaterialIcons name= 'delete' size={25} color='#1B76BE'/>

            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#1B76BE',
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 10,
        flexDirection: 'row'
        
    },
    itemText: {
        marginLeft: 10,
    }
  

});