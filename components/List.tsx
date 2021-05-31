import React from 'react';
import { FlatList, View, Text, Modal, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
// import { uuid } from 'uuidv4';
const FlatListBasics = () => {

  const [items, setItems] = React.useState([
    {id: '1', text: 'Kevin'},
    {id: '2', text: 'Milk'}
  ]);

    return (
      <View style={styles.container}>
        <TouchableOpacity>
        <FlatList
          data={items}
          renderItem={({item}) => <Text style={styles.item}>{item.text}</Text>}
        />
        </TouchableOpacity>
      </View>
    );
  }
  
  export default FlatListBasics;

  const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 1,
      fontSize: 14,
      height: 50,
    },
  });