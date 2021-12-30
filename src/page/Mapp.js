import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {View, Text, TouchableOpacity, Button, Image, ScrollView, ActivityIndicator, StyleSheet, FlatList} from 'react-native'

export default function Mapp({route}){

  const {CapitalLatitude, CapitalLongitude} = route.params;
  var value = parseFloat(CapitalLatitude.replace(",", "."));
  var value2 = parseFloat(CapitalLongitude.replace(",", "."));
  return(
    <View styles={styles.body}>
{/* <Text>{latlng}</Text> */}
  <MapView  
  provider={PROVIDER_GOOGLE}
  style={styles.map}  
    region={{
      latitude: value,
      longitude: value2,
      latitudeDelta: 10.0,
      longitudeDelta: 10.0,
    }}
  >
  </MapView>
    </View>
  );
}

const styles = StyleSheet.create ({
  body:{
alignItems: 'center',
flex:1,
  },
  map:{
    width:'100%',
    height:'100%'
    
  }

})