import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import {Navbar} from './src/components/Navbar';
import {AddTodo} from './src/components/AddTodo';
import {Todo} from './src/components/Todo';

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title
    // }

    // setTodos((prevTodos) => {
    //   return {
    //     ...prevTodos,
    //     newTodo
    //   }
    // });

    setTodos((prev) => [
      ...prev, 
      {
      id: Date.now.toString(),
      title
    }
    ]);
  }

  return (
    <View style={styles.container}>
      <Navbar title="Todo App"/>
      <AddTodo onSubmit={addTodo}/>

      <FlatList
        keyExtractor={item => item.id.toString()}
        data={todos}
        renderItem={({item}) => (
          <Todo todo={item} />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  text: {
    color: "black",
    fontSize: 23
  }
});
