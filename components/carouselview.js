import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ListingCard from './listingcard';
import { Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import data from '../assets/data.js'

export default function CaroselView(props) {
  let deviceWidth = Dimensions.get('window').width;

  function renderItem({ item, index }) {
    return (
      <ListingCard listingData={item}/>
    );
  }


  if(props.listingData==''){
    var outputData = data
  }
  else {
    var outputData = props.listingData
  }

  return (
    <View style={styles.container}>
      <Carousel
        data={outputData}
        renderItem={renderItem}
        sliderHeight={200}
        sliderWidth={deviceWidth}
        itemWidth={deviceWidth * 0.8}
        enableSnap={true}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 300,
  },
});
