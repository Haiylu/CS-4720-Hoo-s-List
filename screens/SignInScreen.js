import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase';

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


var result = {
    user:{
        name:'defaut',
        email:'default email',
        photoUrl:'defualt photot'
    }
};

async function signInWithGoogleAsync() {
    try {
      result = await Google.logInAsync({
        iosClientId: `403984376437-jevfu32omh6ucei6pkebkl3hud2d57fn.apps.googleusercontent.com`,
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        //console.log('in success')
        onSignIn(result)
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  function isUserEqual(googleUser, firebaseUser) {
      //console.log('in equal')
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
            providerData[i].uid === googleUser.idToken) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }

  function onSignIn(googleUser) {
    //console.log('in onsign')
    //console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken);
        // Sign in with credential from the Google user.
        firebase.auth().signInWithCredential(credential).then(function(data) {
            //console.log('in then')
        }).catch(function(error) {
          // Handle Errors here.
          console.log(error)
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      } else {
        console.log('User already signed-in Firebase.');
      }
    });
  }


class SignInScreen extends React.Component {
    constructor(){
        super();
    }
    
    componentDidMount(){
        signInWithGoogleAsync();
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}>Proceed to App</Text>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('TabNav',{userData: result.user})}>
                    <Ionicons name={'md-arrow-forward'} size={50} color={'white'} />
                </TouchableOpacity>
            
            </View>
        )
    }
}

export default withNavigation(SignInScreen);

const profileData = {
    name: 'Jack Renner',
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#1D3461',
      alignItems: 'center',
      justifyContent: 'center'
    },
    listingContainer: {
    },
    textStyle: {
        color:'white',
        fontSize: 25,
        fontFamily: 'Futura'
    }
});
