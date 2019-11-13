import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProfileScreen from './screens/profilescreen.js';
import SearchScreen from './screens/searchscreen.js';
import AddListingScreen from './screens/addlistingscreen.js';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

//MaterialBottomTabNavigator
const TabNavigator = createMaterialBottomTabNavigator({
  Profile: ProfileScreen,
  Search: SearchScreen,
  Add: AddListingScreen,
},
{
defaultNavigationOptions: ({ navigation }) => ({
  tabBarIcon: ({ focused, tintColor }) =>
  getTabBarIcon(navigation, focused, tintColor),
  }),
  initalRouteName: 'Profile',
  barStyle: { backgroundColor: '#1F487E'},
  shifting: true
}
);

//Set Icons for the Tab Nav
const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Profile') {
    iconName = `ios-home`;
  } else if (routeName === 'Search') {
    iconName = `ios-search`;
  } else if (routeName === 'Add') {
    iconName = `ios-add-circle`;
  }
  
  return <IconComponent name={iconName} size={25} color={tintColor} />;
 };

const AppContainer = createAppContainer(TabNavigator);

export default function App() {
  return (
    <AppContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D3461',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  tabnav: {
    justifyContent: 'center',
  }
});


// MAIN COLOR PALETTE TEMP
// Main : #1D3461 - Space Cadet
// #1F487E - Dark Cerulean
// #247BA0 - Lapis Lazuli
// #605F5E - Granite Grey
// #FB3640 - Coral Red

//Link : https://coolors.co/fb3640-605f5e-1d3461-1f487e-247ba0