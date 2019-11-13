import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SearchScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}>This is the Search Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#247BA0', //Lapis Lazuli
      alignItems: 'center',
      justifyContent: 'center'
    },
    textStyle: {
        color:'white',
        fontSize: 25,
        fontFamily: 'Futura'
    }
});