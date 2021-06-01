import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

export default function Users () {
    return(
        <View>
            <Text style={styles.Title}> Kevtropolis </Text>
            <TextInput style = {styles.Input}
            placeholder = 'Username'/>
            <TextInput style = {styles.Input}
            placeholder='Password'/> 
        </View>
    );
}

const styles = StyleSheet.create({
Input:{
    alignItems: 'center',
    borderWidth: 1,
    height: 30,
    width: 200,
},
Title:{
    alignItems: 'center',
    fontSize: 80,


}
});