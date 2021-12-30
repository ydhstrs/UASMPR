import React, { Component } from 'react';

import {View, Text, TouchableOpacity, Button, Image, ScrollView, ActivityIndicator, StyleSheet, FlatList} from 'react-native'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
      isLoading: true
          };
    }
    async getCountry() {
        try {
          const response = await fetch('http://techslides.com/demos/country-capitals.json');
          const json = await response.json();
          this.setState({ data: json});
        } catch (error) {
          console.log(error);
        } finally {
          this.setState({ isLoading: false });
        }
      }

  componentDidMount() {
    this.getCountry();
  }
    render() {
      const { data, isLoading } = this.state;

        return (

        <ScrollView>
<View style={styles.container}>
  <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home')} title='Home'>
<Text style={{
        fontWeight  : 'bold',
        fontStyle   : 'normal',
        textAlign   : 'center',
        letterSpacing: 2,
        fontSize  : 25,
        color : '#FFCC1D'
      }}> Country List </Text>
  </TouchableOpacity>
</View>

       <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Mapp', { CapitalLatitude: item.CapitalLatitude, CapitalLongitude: item.CapitalLongitude})}>

              <Text style={{
        fontWeight  : 'bold',
        fontStyle   : 'normal',
        letterSpacing: 2,
        fontSize  : 15,
      }}>{item.CountryName}, {item.CapitalName}, {item.CountryCode}</Text>
  </TouchableOpacity>

            )}
          />
        )}
      </View>
      </ScrollView>   

       


     
            
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
  }
});

export default Home;