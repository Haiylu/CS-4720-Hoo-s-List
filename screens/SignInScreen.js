import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';

class SignInScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}>SignIn Screen</Text>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('TabNav')}>
                    <Ionicons name={'md-arrow-forward'} size={35} color={'white'} />
                </TouchableOpacity>
            
            </View>
        )
    }
}

export default withNavigation(SignInScreen);

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
    listingContainer: {
    },
    textStyle: {
        color:'white',
        fontSize: 25,
        fontFamily: 'Futura'
    }
});
