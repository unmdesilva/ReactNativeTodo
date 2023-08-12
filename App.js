import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo';
import SandBox from './components/SandBox';


export default function App() {

  const [todos, setTodos] = useState([
    { text: "Sint do sint dolore culpa Lorem eius", key: 1 },
    { text: "Magna laborum minim cillum ullamco.", key: 2 },
    { text: "Irure et sunt cillum incididunt Lorem est ad amet exercitation aliqua excepteur magna.", key: 3 },
    { text: "Sint do sint dolore culpa Lorem eius", key: 4 },
    { text: "Sint do sint dolore culpa Lorem eius", key: 5 },
  ])


  const pressHandler = (key) => {

    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.key != key)
    })
  }

  const onSubmitHandler = (text) => {

    if (text.length < 3) {

      Alert.alert('oops', 'Todo must have atleast 4 characters', [{
        text: 'understood', onPress: () => console.log('understood pressed')
      }])
      return;
    }


    setTodos((preTodos) => {
      return [{ text: text, key: Math.random() }, ...preTodos]
    })

    Keyboard.dismiss()
  }

  return (

    // <SandBox/>

    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <AddTodo onSubmitHandler={onSubmitHandler} />

        <View style={styles.list}>
          <FlatList data={todos} renderItem={({ item }) => (
            <TodoItem item={item} pressHandler={pressHandler} />

            // <Text>{item.text}</Text>
          )} />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    flex:1,
   // backgroundColor:'#ddd',
    padding: 20,
    marginTop: 10
  },
  list: {
    marginTop: 20,
    //backgroundColor:'#4f3',
    flex:1
  }
});
