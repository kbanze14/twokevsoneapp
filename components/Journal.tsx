import React from 'react';
import { View, Text, Modal, Button, TextInput, StyleSheet } from 'react-native';

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
    justifyContent: 'center',
    backgroundColor: 'red',
    height:200,
    width: 100,
},
text:{
    fontSize: 20,
    textAlign: 'center',
},
modalView:{
    backgroundColor: 'red'
}
})