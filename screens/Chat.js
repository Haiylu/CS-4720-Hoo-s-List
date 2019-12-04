import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import Constants from 'expo-constants';

import firebase from 'firebase'; // 4.8.1

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

let ref = firebase.database().ref('messages');

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      lastTyped: '',
    };
    this.listenForMesssage();
  }
  //Go ahead ad send my message state to firebase
  sendData() {
    ref.set({
      messages: this.state.messages,
    });
  }

  //Listen for changes to document in firebase if change update state
  listenForMesssage() {
    let that = this;
    ref.on('value', function(value) {
      if (value !== null) {
        if (value.val() !== null) {
          //Get message property for document
          let messageForFirebase = value.val().messages;
          that.setState({
            messages: messageForFirebase,
          });
        }
      }
    });
  }

  onEnter() {
    this.setState({
      messages: [...this.state.messages, { message: this.state.lastTyped }],
    });
    this.sendData();
    //console.log(this.state.messages);
    this.setState({
      lastTyped: '',//last typed set to null
    })
  }

  onChangeText(testInbox) {
    this.setState({
      lastTyped: testInbox,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.messages.map(item => {
            return <Text> {item.message}</Text>;
          })}
        </ScrollView>
        <Button title={'Send'} onPress={() => this.onEnter()} />

        <TextInput
          style={styles.textInput}
          multiline={true}
          placeholder="Enter your message here"
          placeholderTextColor="#abbabb"
          onChangeText={text => this.onChangeText(text)}
          value={this.state.lastTyped}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  textInput: {
    paddingBottom: 400,
    borderColor: 'red',
    borderWidth: 2,
  },
});

