import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ListingCard from '../components/listingcard';
import MapView from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';

export default class DetailScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            origin:{
                
            },
            destination: this.props.navigation.getParam('listing').coords,
            initialRegion:{
                latitude: 38.0293,
                longitude: -78.4767,
                latitudeDelta: 0.15,
                longitudeDelta: 0.15,
            }
        }
    }

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(result => {
            var lat = result.coords.latitude
            var long = result.coords.longitude
            this.setState({origin: result, initialRegion:{
                latitude:lat+0.03,
                longitude:long,
                latitudeDelta: 0.15,
                longitudeDelta: 0.15,
            }})
        },
        err =>{
            console.log(err)
        })
    }
    
    render(){
        const data = this.props.navigation.getParam('listing')
        const REACT_APP_GOOGLE_API_KEY="AIzaSyBE_ecf12sZIC2lssKjB_BoQEbnm2Sy3w4"

        return(
            <View style={styles.container}>
                
                <View style={styles.top}>
                    <ListingCard details={true}/>
                    <View style={styles.detailCard}>
                        <Text style={styles.textStyle}>{data.description}</Text>
                    </View>
                </View>
                
                <MapView 
                style={styles.mapStyle}
                region={this.state.initialRegion}
                showsUserLocation={true}>

                    <MapView.Marker coordinate={this.state.destination}>
                    </MapView.Marker>

                    <MapViewDirections
                        origin={this.state.origin.coords}
                        destination={this.state.destination}
                        apikey={REACT_APP_GOOGLE_API_KEY}
                        strokeWidth={3}
                        strokeColor="blue"
                    />

                </MapView>

                <View style={styles.controlContainer}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={()=> this.props.navigation.goBack()}>
                        <Ionicons name={'md-arrow-back'} size={20} color={'white'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle} onPress={()=> this.props.navigation.navigate('Chat')}>
                        <Text style={styles.textStyle}>Open Chat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle} onPress={()=> this.props.navigation.goBack()}>
                        <Text style={styles.textStyle}>Button</Text>
                    </TouchableOpacity>
                </View>
 
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
      justifyContent: 'flex-start',
    },
    top: {
        position:'absolute',
        flexDirection:'column',
        alignItems:'center',
        zIndex:2,
        marginTop:20
    },
    detailCard:{
        backgroundColor:'#247BA0',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#247BA0',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        width:300,
        margin:2,
        padding:10
    },
    controlContainer:{
        position:'absolute',
        zIndex:2,
        bottom:25,
        left:25,
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    buttonStyle: {
        backgroundColor: '#FB3640',
        borderColor: '#FB3640',
        width:'25%',
        borderWidth:10,
        borderRadius:30,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    textStyle: {
        color:'white',
        fontSize: 12,
        fontFamily: 'Futura'
    }
});