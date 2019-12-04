import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CameraAccess from '../components/CameraAccess'
import Controls from '../components/Controls'

export default class AddListingScreen extends React.Component {
    render(){
        return(
            <View >
                <CameraAccess />
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
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