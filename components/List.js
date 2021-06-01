import React, {useState} from 'react';
import { FlatList, View, Text, Modal, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { add } from 'react-native-reanimated';
import { v4 as uuidv4 } from 'uuid';


const FlatListBasics = () => {

  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Kevin'},
    {id: uuidv4(), text: 'Milk'}
  ]);

   const Submit = (text) => {
       setItems(prevItems => {
         return [{id: uuidv4(), text}, ...prevItems];
       });
   };
  
    return (
      <View style={styles.container}>
        
        <FlatList
          data={items}
          renderItem={({item}) => <Text style={styles.item}>{item.text}</Text>}
        />
        <Button
        title = 'add Barth'
        onPress = {() => Submit('Barth')}/>
         <Button
        title = 'add Mark'
        onPress = {() => Submit('Barth')}/>
      </View>
    );
  }
  
  export default FlatListBasics;

  const styles = StyleSheet.create({
    container:{
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 1,
      fontSize: 14,
      height: 50,
    },
    input: {
      borderWidth: 1,
      paddingBottom: 20,
      width: 100,
    }
  });