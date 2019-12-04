import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

import desk from '../assets/desk.jpeg'

class ListingCard extends React.Component {
    constructor(props) {
        super(props);
    }


    render(){
        var listing = this.props.listingData
        if (this.props.details!==true) {
            var detailButton = 
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Details',{listing: listing})}>
                <Ionicons name={'md-list'} size={35} color={'white'} />
            </TouchableOpacity>;
        }
        else{
            var detailButton;
        }
        
        if(listing.img!==''){
            var image = <Image style={styles.itemImg} source={{uri: listing.img}} />;
        }
        else {
            var image = <Image style={styles.itemImg} source={desk} />;
        }

        return(
            <View style={styles.container}>
                {image}
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