import React from 'react';
import { View, Text, Modal, Button, TextInput, StyleSheet } from 'react-native';

export default function ListInput () {
    const [item, setItem] = React.useState('Milk')
    return(
        <View>
        <TextInput> </TextInput>
        <Button title = 'Add'
        onPress = {() => {setItem(item)}}>
        </Button>
        </View>
    );
}