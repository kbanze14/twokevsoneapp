import React, {useState} from 'react';
import {StyleSheet, View, Text, Modal, Button, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../stylesheet/actions';
import { add } from 'react-native-reanimated';


const AddItem = ({ title, addItem }) => {
    const [text, setText] = React.useState('');
    
    const onChange = (textValue) => setText(textValue);
  
    return (
        <View>
            <TextInput placeholder='Add item...' onChangeText={onChange} style={textInput.input}/>
            <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
                <Text style={styles.btnText}>
                <Icon name='plus' size={20}/> Add Item
                </Text>
            </TouchableOpacity>
        </View>
    );
  };
  
  export default AddItem;

  const textInput = StyleSheet.create({
      input: {
          height: 60,
          padding: 8,
          fontSize: 16
      }
  })