import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Tab from '../../components/Tab-Nav';

import { addValue, firstOn, firstOff, secondOn, secondOff, thirdOn, thirdOff } from '../../../redux/navbarReducer'
import { useDispatch, useSelector } from 'react-redux';

const WIDTH = Dimensions.get('window').width;
const tab = ['Scroll To Top', 'Grid', 'Linking']

export default function Navbar({ navigation }) {
    const dispatch = useDispatch();
    const { value, first, second, third } = useSelector(state => state.navbarMarket);

  return (
    <SafeAreaView style={{backgroundColor: '#997146'}}>
      <View style={{
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-between',
        }}
        >
        <Text style={styles.menutext}> {value} </Text>
        <TouchableOpacity 
            style={styles.menu}
            onPress={() => navigation.navigate('Home')} 
            >
            <Text style={{ fontWeight: 'bold', }}> Home </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.nav}>
        <Tab
            title={tab[0]}
            onFocus={first}
            onPress={() => {
                dispatch(firstOn())
                dispatch(secondOff())
                dispatch(thirdOff())
                dispatch(addValue(tab[0]))
            }}
            />

        <Tab
            title={tab[1]}
            onFocus={second}
            onPress={() => {
                dispatch(firstOff())
                dispatch(secondOn())
                dispatch(thirdOff())
                dispatch(addValue(tab[1]))
            }}
            />
            
        <Tab
            title={tab[2]} 
            onFocus={third}
            onPress={() => {
                dispatch(firstOff())
                dispatch(secondOff())
                dispatch(thirdOn())
                dispatch(addValue(tab[2]))
            }}
            />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 15,
    },
    menu: {
        backgroundColor: '#abd7ff',
        fontWeight: 'bold',
        width: WIDTH * 0.2,
        height: WIDTH * 0.12,
        padding: 10,
        margin: 5,
        borderBottomLeftRadius: 20,
        borderWidth: 1.5,
        borderColor: '#fff',
    },
    menutext: {
        color: '#fff',
        marginHorizontal: 10,
        fontSize: 34,
        fontFamily: 'PatrickHand-Regular',
    },
})