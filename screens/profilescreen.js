import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-carousel-view';
//import FBLoginButton from '../components/fbloginbutton'
import ProfileCard from '../components/profilecard'
import ListingCard from '../components/listingcard'
import CarouselView from '../components/carouselview'
import { withNavigation } from 'react-navigation';
import firebase from 'firebase'

if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: 'AIzaSyDFydiY32gB1entJUDL3SRGgSx3axG3dJo',
      authDomain: 'fir-lab-741e6.firebaseapp.com',
      databaseURL: 'https://fir-lab-741e6.firebaseio.com',
      projectId: 'fir-lab-741e6',
      storageBucket: 'fir-lab-741e6.appspot.com',
      messagingSenderId: '909952167098',
      appId: '1:909952167098:web:50e8c61e6b279d57cd6683',
      measurementId: 'G-NKTW7CXF59',
    });
  }

var data = '';

export default class ProfileScreen extends React.Component {  
    constructor(){
        super();
        this.state={
            listingData:data,
            userData:''
        }
    }
    
    componentDidMount(){
        const userData = this.props.navigation.getParam('userData')
        firebase.database().ref('listings/').on('value', (snapshot) => {
            data = snapshot.val()
            if(data){
                let outputData = []
                for(let listing in data){
                    outputData.push(data[listing])
                }
                outputData = outputData.filter(listing => listing.owner.name===userData.name)
                this.setState({listingData:outputData})
            }
        });
    }

    render(){
        
        const userData = this.props.navigation.getParam('userData')
        return(
            <View style={styles.container}>
                <ProfileCard userData={userData}/>
                <Text style={styles.textStyle}>Active Listings</Text>
                <CarouselView listingData={this.state.listingData} navigation={this.props.navigation}/> 
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
