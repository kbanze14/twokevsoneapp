import React from 'react';
import { FlatList, View, Text, Modal, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const FlatListBasics = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
        <FlatList
          data={[
            {key: 'Kevin'},
            {key: 'Mark'},
            {key: 'Bartholomew'},
            {key: 'Sheen'},
            {key: 'Hugh'},
            {key: 'Jimbo'},
            {key: 'Demarcus'}
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
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