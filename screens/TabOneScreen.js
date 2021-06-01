import * as React from 'react';
import { Button, FlatList} from 'react-native';
import { Text, View } from '../components/Themed';
import Home from '../components/Journal';
import ListItem from '../components/ListItem';
import AddItem from '../components/AddItem';
import styles from '../stylesheet/screens';
import { v4 as uuidv4 } from 'uuid';

export default function TabOneScreen() {

  const [items, setItems] = React.useState([
    {id: uuidv4(), text: 'Kevin'},
    {id: uuidv4(), text: 'Milk'}
  ]);

  const addItem = (text) => {
    setItems(prevItems => {
      return [{id: uuidv4(), text}, ...prevItems];
    });
};

  return (
    <View style={styles.container}>
      <Text>two kevs one app</Text>
      <Home/>
      <AddItem addItem={addItem}/>
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item}/>}
        />
      <Text style={styles.title}>Tab 1</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}