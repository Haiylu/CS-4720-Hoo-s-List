import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-carousel-view';
//import FBLoginButton from '../components/fbloginbutton'
import ProfileCard from '../components/profilecard'
import ListingCard from '../components/listingcard'
import CarouselView from '../components/carouselview'
import { withNavigation } from 'react-navigation';

export default class ProfileScreen extends React.Component {
    
    render(){
        const userData = this.props.navigation.getParam('userData')
        return(
            <View style={styles.container}>
                <ProfileCard userData={userData}/>
                <Text style={styles.textStyle}>Active Listings</Text>
                <CarouselView navigation={this.props.navigation}/> 
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
      justifyContent: 'flex-start'
    },
    listingContainer: {
    },
    textStyle: {
        color:'white',
        fontSize: 25,
        fontFamily: 'Futura'
    }
});

//AppRegistry.registerComponent('Hoos List', () => App);