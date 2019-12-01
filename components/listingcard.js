import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

import desk from '../assets/desk.jpeg'

const listing = {
    id:'uniqueID',
    img:'image source',
    owner:{
        name:'Jack Renner',
    },
    coords:{
        latitude: 38.0293,
        longitude: -78.4767
    },
    price:'$150.00',
    type:'Furniture',
    description:'This is a 2010 IKEA Malmo desk that is in great condition. It has 3 drawers, and plenty of space to work on.',
    location:'199 Washington Ave.'
}

class ListingCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        if (this.props.details!==true) {
            var detailButton = 
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Details',{listing: listing})}>
                <Ionicons name={'md-list'} size={35} color={'white'} />
            </TouchableOpacity>;
        }
        else{
            var detailButton;
        }
        return(
            <View style={styles.container}>
                <Image style={styles.itemImg} source={desk} />
                <View style={styles.infoContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textStyle}>Seller: {listing.owner.name}</Text>
                        <Text style={styles.textStyle}>Category: {listing.type}</Text>
                        <Text style={styles.textStyle}>Price: {listing.price}</Text>
                        <Text style={styles.textStyle}>Location: {listing.location}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity>
                            <Ionicons name={'md-star'} size={35} color={'white'} />
                        </TouchableOpacity>
                        {detailButton}
                    </View>
                </View>
            </View>
        )
    }
}

export default withNavigation(ListingCard);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#247BA0',
        alignItems: 'flex-start',
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
        width:300,
        height:230,
        margin:10
    },
    infoContainer: {
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        width:'100%',
        margin:5,
    },
    buttonContainer: {
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        width:'40%'
    },
    textStyle: {
        color:'white',
        fontSize: 12,
        fontFamily: 'Futura'
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width:'60%'
    },
    itemImg: {
        height: 150,
        width: '100%',
        borderRadius: 1,
        borderColor: 'black',
    },
});