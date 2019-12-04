import React from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator, Picker } from 'react-native';
import { ListItem, SearchBar, Slider } from 'react-native-elements';
import { Button } from 'react-native-paper';
import data from '../assets/data.js';


export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      dataPLS: [],
      error: null,
      category: '',
      price: 500,
      fullData: []
    };

    
  }

  componentDidMount() {
    this.setState({
      dataPLS: data
    })
   console.log(this.state.dataPLS)

  }

  // makeRemoteRequest = () => {
  //   const url = `https://randomuser.me/api/?&results=20`;
  //   this.setState({ loading: true });

  //   fetch(url)
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({
  //         data: res.results,
  //         error: res.error || null,
  //         loading: false,
  //       });
  //       this.fullData = res.results;
  //     })
  //     .catch(error => {
  //       this.setState({ error, loading: false });
  //     });
  // };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  searchFunction = (text) => {
    this.setState({
      value: text,
    });
    console.log(this.state.value)
      const filteredData = this.state.fullData.filter(item => {
      const listing = `${item.id}`;
      //${item.category.toUpperCase()} 
      const textInput = text.toUpperCase();
      //const cat = this.category.toUpperCase();

      return listing.indexOf(textInput) > -1;
      // & listing.indexOf(this.state.category)
    });
    this.setState({
      dataPLS: filteredData,
    });
  };

  // categoryClick = type => {
  // this.setState({
  // category: type,
  // });

  // const 
  // };

  renderHeader = () => {
    return (
    <View style={styles.header}>
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        value={this.state.value}
        onChangeText={text => this.searchFunction(text)}
        autoCorrect={false}
      />
      <Slider
      style={styles.slide}
      minimumTrackTintColor= 'orange'
      maximumTrackTintColor= '#1D3461'
      thumbTintColor= '#1D3461'
      //thumbImage={require('./uvalogo.png')}
      step={1}
      minimumValue={0}
      maximumValue={500}
      value={this.state.price}
      onValueChange={value => this.setState({price: value })}
      onSlidingComplete={ value => this.pricePress(value) }
      />
    <Text>Price: $0 - ${this.state.price}</Text>
  </View>
    );
  };

  pricePress = value => {
    this.setState({price: value})
    const filteredData = this.state.fullData.filter(item => {
      const listing = `${item.price}`;
      //${item.category.toUpperCase()} 
      //const textInput= category;
      //const cat = this.category.toUpperCase();
  
      return listing <= this.state.price;
      // & listing.indexOf(this.state.category)
    });
    this.setState({
      dataPLS: filteredData,
    });
  }

  catPress = category => {
    
    const filteredData = this.state.fullData.filter(item => {
    const listing = `${item.type.toUpperCase()}`;
    //${item.category.toUpperCase()} 
    //const textInput= category;
    const cat = this.state.category.toUpperCase();
  
    return listing.indexOf(cat) > -1;

    // & listing.indexOf(this.state.category)
  });
  this.setState({
    dataPLS: filteredData,
  });
  console.log(dataPLS);
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          style={styles.list}
          data={this.state.dataPLS}
          renderItem={({ item }) => (
            <ListItem
              leftAvatar={{ source: { uri: item.img } }}
              title={`${item.id}`}
              subtitle={item.description} //can be more information on the listing
            />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
        
        <Picker 
          style={styles.pick}
          selectedValue={this.state.category}
          mode='dropdown'
          onValueChange={(itemValue, itemindex) => this.setState({category: itemValue})}>
            <Picker.Item label="Select an option" value="" />
            <Picker.Item label="Shoes" value="SHOES" />
            <Picker.Item label="Jackets" value="JACKETS" />
            <Picker.Item label="Shirts" value="SHIRTS" />
            <Picker.Item label="Textbooks" value="TEXTBOOKS" />
            <Picker.Item label="Furniture" value="FURNITURE" />
        </Picker>
        <Button title="Filter" onPress={this.catPress} backgroundColor='#1D3461'/>
      </View>
    );
  }
}
  const styles = StyleSheet.create({
    header: {
      marginTop: 20,
      flex: 1, 
      alignItems: 'stretch', 
      justifyContent: 'center',
    },
    slide:{
      width: 350,
      marginLeft: 10,
      marginRight: 10
      
    },
    list:{
      backgroundColor: 'white',
    },
    pick:{
      borderTopColor: '#1D3461',
      backgroundColor: 'white',
      marginVertical: 0,
       

    }
  })