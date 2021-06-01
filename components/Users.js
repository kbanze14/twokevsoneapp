import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

export default function Users () {
    return(
        <View>
            <Text style={styles.title}> Kevtropolis </Text>
            <TextInput style = {styles.input}
            placeholder = 'Username'/>
            <TextInput style = {styles.input}
            placeholder='Password'/> 
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
    alignItems: 'center',
    borderWidth: 1,
    height: 30,
    width: 200,
},
    title:{
    alignItems: 'center',
    fontSize: 80,
}
});