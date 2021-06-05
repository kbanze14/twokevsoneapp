import * as React from 'react';
import { Button, FlatList, Alert} from 'react-native';
import { Text, View } from '../components/Themed';
import ListItem from '../components/ListItem';
import AddItem from '../components/AddItem';
import styles from '../stylesheet/screens';
import { v4 as uuidv4 } from 'uuid';

export default function TabOneScreen() {

  const [items, setItems] = React.useState([
    {id: uuidv4(), text: 'Kevin'},
    {id: uuidv4(), text: 'Milk'}
  ]);

  const addItem = (text,setText) => {
    if (text == ''){
    Alert.alert('Error', 'Add body')
    }
    else {
    setItems(prevItems => {
      return [{id: uuidv4(), text}, ...prevItems];
    });
  };
};

  const editItem = (id) => {
    setItems(prevItems => {
      return [{id, text:textValue}, ...prevItems]
    });
  };


  const delItem = (id) => {
    setItems(prevItems => {
      return(prevItems.filter(item => item.id != id))
    });
  };
    


  return (
    <View style={styles.container}>
      <Text>two kevs one app</Text>
      <AddItem addItem={addItem}/>
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} delItem={delItem}  editItem={editItem}/>}
        />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
  }