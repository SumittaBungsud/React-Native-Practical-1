import { SafeAreaView, View, StyleSheet } from 'react-native'
import React from 'react'
import { FirstPage, SecondPage, ThirdPage, Navbar } from './TabScreen'

import { useSelector } from 'react-redux';

export default function Market({ navigation })  {
    const { first, second, third } = useSelector(state => state.navbarMarket);

  return (
    <SafeAreaView style={styles.body}>
      <Navbar navigation={navigation}/>
      { first && <FirstPage/> }
      { second && <SecondPage/> }
      { third && <ThirdPage/> }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})