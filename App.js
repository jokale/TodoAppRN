import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Header from './Components/Header';
import Todo from './Components/Todo'
import Form from './Components/Form'
// import Sandbox from './Components/Sandbox';

export default function App() {

  const [todos, setTodos] = useState([
    {text: 'Wash my hair', key: '1'},
    {text: 'Moisturise and blow dry my hair', key: '2'},
    {text: 'Moisturise and cornrow ', key: '3'},
    {text: 'Go and get food shop', key: '4'},
    {text: 'Wash car', key: '5'}

  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    if (text.length > 3){
      setTodos((prevTodos) => {
      return[
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ]
    }
    )
  }
  else {
    Alert.alert('ERROR', 'You must add to do over 3 chars long', [{
      text: 'Understood', onPress: () =>console.log('alert closed')}
    ])
      }
    }
    

  return ( 
    // <Sandbox/>
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('dismissed keyboard')
    }}>
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <Form submitHandler={submitHandler}/>
          <View style={styles.list}>
          <FlatList 
          data={todos}
          renderItem={({item}) => (
            <Todo item={item} pressHandler={pressHandler}/>
          )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content:{
    // backgroundColor:'#C2FFF5' ,
    padding: 40,
    flex: 1,

  },
  list: {
    marginTop: 20,
    // backgroundColor: '#C2FFF5',
    flex: 1,

  }
});
