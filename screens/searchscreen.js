import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, ActivityIndicator, Dimensions } from 'react-native';
import {header, Button, SearchBar, ListItem, List} from 'react-native-elements';
import _ from "lodash";


 

export default class SearchScreen extends React.Component {
    constructor(props){
    super();
    const userData = {
        1:{
            first: "Jack",
            last:"Renner"
        },
        2:{
            first: "Tom",
            last:"Riddler"
        },
        3:{
            first: "Harry",
            last:"Potter"
        },
        4:{
            first: "Dan",
            last:"Smith"
        }
    }
    
    this.state = { 
        loading: false,
        data: [],
        error: null,
        query: "",
        fullData: [],
    };
    }
    contains = ({ name, email }, query) => {
      const { first, last } = name;
      if (first.includes(query) || last.includes(query)) {
        return true;
      }
      return false;
    };
    
    getUsers = (limit = 20, query = "") => {
      return new Promise((resolve, reject) => {
        if (query.length === 0) {
          resolve(_.take(users, limit));
        } else {
          const formattedQuery = this.query.toLowerCase();
          const results = _.filter(users, user => {
            return contains(user, formattedQuery);
          });
          resolve(_.take(results, limit));
        }
      });
    };

    componentWillMount() {
        this.fetchData();
      }

    fetchData = async () => {
        const response = await fetch("https://randomuser.me/api?results=20");
        const json = await response.json();
        this.setState({ data: json.results });
      };

  handleSearch = text => {
    console.log(text);
    this.setState({query: text});
    console.log(this.state.query)
  };
 
  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    this.setState({ loading: true });

    this.getUsers()
      .then(users => {
        this.setState({
          loading: false,
          data: users,
          fullData: users
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };
  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round onChangeText={this.handleSearch} />
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };


  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          fullData={this.state.data}
          renderItem={({ item }) => ( 
            <Text key={item.login.uuid}>
              {`${item.name.first} ${item.name.last}`}
          </Text>
          )}
          keyExtractor={item => item.login.uuid}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  headerStyle: {
    justifyContent: "flex-end"
  }
});
  