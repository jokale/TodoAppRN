import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button} from 'react-native';


export default function Form(){

    const[text, setText] = useState('');
    const changeHandler = (val) => {
    setText(val);

}
    return (
        <View>
            <TextInput
            placeholder='What I need to do next'
            onChangeText={changeHandler}
            />
        </View>
    )
}



