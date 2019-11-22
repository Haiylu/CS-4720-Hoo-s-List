import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class DetailScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}>Details Screen</Text>
                <TouchableOpacity onPress={()=> this.props.navigation.goBack()}>
                    <Ionicons name={'md-arrow-back'} size={35} color={'white'} />
                </TouchableOpacity> 
            </View>
        )
    }
}


const profileData = {
    name: 'Jack Renner',
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#1D3461',
      alignItems: 'center',
      justifyContent: 'center'
    },
    textStyle: {
        color:'white',
        fontSize: 25,
        fontFamily: 'Futura'
    }
});