import React, {useState} from 'react';
import { FlatList, View, Text, Modal, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { add } from 'react-native-reanimated';


const FlatListBasics = () => {

  const [items, setItems] = useState([
    {id: 1, text: 'Kevin'},
    {id: 2, text: 'Milk'}
  ]);


   const Submit = () => {
     var newItem = [{id: 3 , text: 'Barth'}];
     setItems(newItem.concat(items));
   };

   const Submit2 = () => {
    var newItem = [{id: 4, text: 'Mark'}];
    setItems(newItem.concat(items));
  }
  
    return (
      <View style={styles.container}>
        
        <FlatList
          data={items}
          renderItem={({item}) => <Text style={styles.item}>{item.text}</Text>}
        />
        <Button
        title = 'add Barth'
        onPress = {Submit}/>
         <Button
        title = 'add Mark'
        onPress = {Submit2}/>
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