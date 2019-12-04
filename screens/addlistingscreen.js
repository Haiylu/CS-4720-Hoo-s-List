import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import CameraAccess from '../components/CameraAccess'
import Controls from '../components/Controls'
import t from 'tcomb-form-native'
import { Button } from 'react-native-paper';
import Geocoder from 'react-native-geocoding';
import { Ionicons } from '@expo/vector-icons';

 
import firebase from 'firebase'


const Form = t.form.Form;
import bootstrap from 'tcomb-form-native/lib/stylesheets/bootstrap.js';
var options = {
  stylesheet : bootstrap
}
//override the specific stylesheet
options.stylesheet.textbox.normal = {
  color: 'white',
  height: 36,
  padding: 7,
  borderRadius: 4,
  borderWidth: 1,
  borderColor:'white',
  marginBottom: 5
};
options.stylesheet.controlLabel.normal = {
    color: 'white',
    fontSize: 18,
    marginBottom: 7,
    fontWeight: '600'
};

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

const ref = firebase.database().ref('listings');

const ListingData = t.struct({
  type: t.String,
  price: t.String,
  description: t.String,
  location: t.String
});

Geocoder.init('AIzaSyBE_ecf12sZIC2lssKjB_BoQEbnm2Sy3w4');

export default class AddListingScreen extends React.Component {
    constructor(){
        super();
        
        this.state={
            id: -1,
            img:'',
            owner:{
                name:'default',
                userID:'-1'
            },
            coords:{
                latitude: 38.0293,
                longitude: -78.4767
            },
            price:'',
            type:'',
            description:'',
            location:''
        }
    }

    componentDidMount(){
        var userData = this.props.navigation.getParam('userData');
        this.setState({
            id:-5,
            owner:{name:userData.name,userID:userData.id}
        })
    }

    addListing = () => {
        const value = this._form.getValue()
        
        //geolocate coordinates from address
        if(value!=null){
        Geocoder.from(value.location).then(json => {
            var location = json.results[0].geometry.location;
            this.setState({coords:{
                latitude:location.lat,
                longitude:location.lng
            }})
        
        //push data to firebase
        ref.push({
            id:Math.trunc(Math.random()*100000),
            img:'default pic',
            owner:this.state.owner,
            coords:this.state.coords,
            price:value.price,
            type:value.type,
            description:value.description,
            location:value.location
        }).then((data)=>{
            //success callback
            console.log('data ', data)
        }).catch((error)=>{
            //error callback
            console.log('error ' , error)
        })

        })
        .catch(error => console.log(error)); //geolocation error
    }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text style={styles.textStyle}>Enter Your Listing Info</Text>
                </View>
                <View>
                    <Form ref={c => this._form = c} type={ListingData} options={options}/>

                    <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}} 
                        onPress={()=>this.props.navigation.navigate('Camera')}>
                        <Text style={styles.textStyle}>Add a Photo!</Text>
                        <Ionicons name={'md-camera'} size={35} color={'white'} />
                    </TouchableOpacity>
                </View>
                
                <Button mode='contained' onPress={this.addListing} >Add Listing!</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1D3461',
      justifyContent: 'space-evenly',
      padding:20,
      width:Dimensions.get('window').width
    },
    textStyle: {
        color:'white',
        fontSize: 25,
        fontFamily: 'Futura'
    }
});