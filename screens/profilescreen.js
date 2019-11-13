import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ProfileScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}>This is the Profile Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FB3640', //Coral Red
      alignItems: 'center',
      justifyContent: 'center'
    },
    textStyle: {
        color:'white',
        fontSize: 25,
        fontFamily: 'Futura'
    }
});