import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import girl from '../assets/4.png'

export default class ProfileCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Image style={styles.profileImg} source={girl} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>Jack Renner</Text>
                    <Text style={styles.textStyle}>Charlottesville, VA</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#247BA0',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#247BA0',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginBottom:20,
        paddingTop:20,
        height:200,
        width:'100%'
    },
    textStyle: {
        color:'white',
        fontSize: 15,
        fontFamily: 'Futura'
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImg: {
        height: 80,
        width: 80,
        borderRadius: 40,
        borderColor: 'black',
        margin:10,
      },
});