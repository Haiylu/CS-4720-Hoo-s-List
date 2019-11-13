import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AddListingScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}>This is the Add Listing Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#605F5E', //Granite Grey
      alignItems: 'center',
      justifyContent: 'center'
    },
    textStyle: {
        color:'white',
        fontSize: 25,
        fontFamily: 'Futura'
    }
});