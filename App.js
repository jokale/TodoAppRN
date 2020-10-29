import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [todos, setTodos] = useState([
    {text: 'Wash my hair', key: '1'},
    {text: 'Moisturise and blow dry my hair', key: '2'},
    {text: 'Moisturise and cornrow ', key: '3'},
    {text: 'Go and get food shop', key: '4'},
    {text: 'Wash car', key: '5'},

  ])
  return (
    <View style={styles.container}>
      {/* header */ }
      <View style={styles.content}>
        {/* to do form */}
        <View style={styles.list}>
          <FlatList 
          data={todos}
          renderItem={({item})=>(
            <Text>{item.text}</Text>

          )
          }
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
});
