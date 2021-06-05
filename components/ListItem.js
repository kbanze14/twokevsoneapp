import React, {useState} from 'react';
import { View, Text, Modal, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = ({ item, delItem, editItem }) => {

  const [vis, setVis] = useState(false);
  const [txt, setTxt] = useState('');
  
  
  const onChange = textValue => setTxt(textValue);
  
  
  
    return (
      <TouchableOpacity 
      onPress={() => console.log(item.text)}
      style={styles.listItem}>
        <View style={styles.listItemView}>
          <Text style={styles.listItemText}>{item.text}</Text>
          <TouchableOpacity onPress={() => delItem(item.id)} >
            <Icon
            name = 'close' size = {20}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress = {() => setVis(!vis)}>
             
            <Icon 
            name = 'pencil' size = {20} 
            />
            <Modal animationType = 'fade'
            visible = {vis}

            >
              <View style={styles.modalView}>
                <TextInput style= {styles.inputText} placeholder={item.text} onChangeText = {onChange}></TextInput>
                <Button title = 'close'
                onPress = {() => setVis(!vis)}/>
                {/* <Button title = 'save changes'
                onPress = {() => editItem(item.id)}/> */}
              </View>
            </Modal>
          </TouchableOpacity>
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
    },
    modalView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    inputText: {
      borderWidth: 1,
      width: 200,
      height: 50
    }
  });