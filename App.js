import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import Todo from './Components/Todo'

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

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        {/* to do form */}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content:{
    padding: 40,

  },
  list: {
    marginTop: 20,
  }
});
