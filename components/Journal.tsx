import React from 'react';
import { View, Text, Modal, Button, TextInput, StyleSheet } from 'react-native';
import ListInput from '../components/Input';

export default function Home () {
    const [showModal, setShowModal] = React.useState(false);

    return(
        <View>
            <Modal 
            animationType={'fade'}
            transparent = {false}
            visible= {showModal}
            onRequestClose = {() => console.log('close')}
            >
                <View style={styles.container}>
                    <Button title = 'hide modal'
                    onPress = {() => {setShowModal(!showModal)}}>
                    </Button>
                    <Text style= {styles.text}> List </Text>
                    <ListInput/>
                </View>
            </Modal>
            <Button title = 'show modal'
            onPress = {() => {setShowModal(!showModal)}}>

            </Button>
        </View>
        
    );
}
const styles = StyleSheet.create({
container:{
    paddingTop: 10, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    height:200,
    width: 430,
},
text:{
    fontSize: 20,
    textAlign: 'center',
},
modalView:{
    backgroundColor: 'red'
},
bilfs:{
    backgroundColor: '#000000'
}
})