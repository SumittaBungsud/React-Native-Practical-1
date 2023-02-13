import { SafeAreaView, View, Text, StyleSheet, Image, RefreshControl, Button } from 'react-native'
import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen({ navigation }) {
  const mapCallback = () =>{
    return (
      <MapView
          style={styles.map}
              initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
              }}
          >
            <Marker
              coordinate={{latitude: 37.78825, longitude: -122.4324}}
              title='Somewhere over the rainbow'
              description='The pandora is opening to test description'
            >
              <Image source={require("../../assets/ts-map-pin.png")} style={{height: 50, width:50 }} />
            </Marker>
      </MapView>  
    )
  }
  const [ showMap, setMap ] = useState(mapCallback())
  const [ count, setCount ] = useState(0)
  const [ Refreshing, setRefreshing ] = useState(false)
  const onRefresh = () =>{
    setRefreshing(true)
    setMap(mapCallback())
    setCount(i => i+1)
    setRefreshing(false)
  }

  return (
      <SafeAreaView 
        style={styles.body} 
        refreshControl={
          <RefreshControl 
            refreshing={ Refreshing } 
            onRefresh={ onRefresh }
          />
        }
        >
        <View style={{flexDirection: 'row', alignItems: 'space-between', justifyContent: 'center',}}>
          <Text style={styles.text} > Maps {count} </Text>
          <Button 
            title='refresh' 
            onPress={ onRefresh } 
            />
        </View> 
        { !Refreshing && showMap }
        <Text
          style={[styles.button, {backgroundColor: '#36a6e4', color: '#fff',}]}
          onPress={() => navigation.navigate('Home')}
          > Go to Home </Text>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 40,
        margin: 15,
    },
    button: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 15,
        borderRadius: 5,
        textAlign: 'center',
        width: '40%',
        marginVertical: 10,
    }, 
    map: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '80%',
    }, 
})