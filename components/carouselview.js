import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ListingCard from './listingcard';
import { Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';

export default function CaroselView(props) {
  let deviceWidth = Dimensions.get('window').width;
  let dummyData = [1,2,3,4]

  function renderItem({ item, index }) {
    return (
      <ListingCard />
    );
  }

  return (
    <View style={styles.container}>
      <Carousel
        data={dummyData}
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
