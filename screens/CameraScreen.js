import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import CameraAccess from '../components/CameraAccess'

class CameraScreen extends React.Component {
    
    render(){

        return(
            <CameraAccess />
        )
    }
}

export default withNavigation(CameraScreen);

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

//AppRegistry.registerComponent('Hoos List', () => App);