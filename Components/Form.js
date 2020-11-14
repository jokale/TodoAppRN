import React, {useState} from 'react';
import { View,StyleSheet, Text, TextInput, Button} from 'react-native';


export default function Form({submitHandler}){

    const[text, setText] = useState('');
    const changeHandler = (val) => {
    setText(val);

}
    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder='What I need to do next'
            onChangeText={changeHandler}
            />
            <Button onPress={()=> submitHandler(text)} title='Add' color='#1B76BE'></Button>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical:6,
        borderBottomWidth: 1,
        borderBottomColor: '#1B76BE',
    }
  
  });






