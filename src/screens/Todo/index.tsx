import React from 'react';
import Card from '../../components/Card';
import TodoModal from '../../components/TodoModal';
import TodoContextAPI from '../../context/TodoContextAPI';

import { styles } from './style';
import { useContext } from 'react';
import { FlatList } from 'react-native';
import { View, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { todoInterface } from '../../context/TodoContextAPI';


const Todo = () => {
  const [{ todos }, dispatch] = useContext(TodoContextAPI);
  const [modalVisible, setModalVisible] = useState(false);
  //props of modal
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');

  const handleModal = (todo: todoInterface) => {
    setTitle(todo.title);
    setDescription(todo.description);
    setDate(todo.date);
    setImage(todo.image);
    setModalVisible(true);
  }

  useEffect(() => {
    // it will be executed only one time 
    if(todos.length === 0) {
      // fake api meant for testing
      fetch('https://my-json-server.typicode.com/moatasemyakhni/mockjson/db')
        .then((response) => response.json())
        .then((data) => {
          const response: Array<todoInterface> = data.todos;
          dispatch({todos: response});
        })
        .catch(err => Alert.alert(err));
    }
  }, [])
  return (
    <View style={styles.container}>
      <TodoModal 
        date={date}
        description={description}
        image={image}
        title={title}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      <FlatList 
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={
          ({item}) => <Card 
            title={item.title} 
            date={item.date} 
            key={item.id.toString()} 
            onPress={() => handleModal(item)} 
        />}
      />
    </View>
  );
}

export default Todo;