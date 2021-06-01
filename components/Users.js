import React from 'react';
import {TouchableOpacity, Text, TextInput, View, StyleSheet} from 'react-native';
import styles from '../stylesheet/actions';

export default function Users () {
    const [username, setUser] = React.useState('');
    const [password, setPass] = React.useState('');
    const onChangeUser = (username) => setUser(username);
    const onChangePass = (password) => setPass(password);

    return(
        <View>
            <Text style={textInput.title}> Kevtropolis </Text>
            <TextInput style={textInput.input}
            placeholder = 'Username'
            onChangeText={onChangeUser} />
            <TextInput style={textInput.input}
            placeholder='Password'
            onChangeText={onChangePass} />
            <TouchableOpacity
            style={styles.btn}
            onPress={() => {
                console.log('Username:', username)
                console.log('Password:', password)
            }}>
                <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const textInput = StyleSheet.create({
    input: {
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    alignItems: 'center',
    borderWidth: 1,
    height: 40,
    width: 300
},
    title: {
    alignItems: 'center',
    fontSize: 80
}
});