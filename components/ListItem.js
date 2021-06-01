import React, {useState} from 'react';
import { FlatList, View, Text, Modal, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { add } from 'react-native-reanimated';
import { v4 as uuidv4 } from 'uuid';


const ListItem = ({ item }) => {

   const Submit = (text) => {
       setItems(prevItems => {
         return [{id: uuidv4(), text}, ...prevItems];
       });
   };
  
    return (
      <TouchableOpacity 
      onPress={() => console.log(item.text)}
      style={styles.listItem}>
        <View style={styles.listItemView}>
          <Text style={styles.listItemText}>{item.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  
  export default ListItem;

  const styles = StyleSheet.create({
    listItem: {
      padding: 15,
      backgroundColor: '#f8f8f8',
      borderWidth: 1,
      borderColor: '#eee'
    },
    listItemView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    listItemText: {
      fontSize: 18
    }
  });