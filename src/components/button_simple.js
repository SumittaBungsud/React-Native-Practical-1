import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ButtonSimple({
    buttonColor='#36a6e4',
    fontColor='#fff',
    text='..Press..',
    ...props
}) {
  return (

    <TouchableOpacity
      style={[styles.button, {backgroundColor: buttonColor}]}
      {...props}
      >
      <Text
        style={[styles.text, {color: fontColor,}]}
        > {text} </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      width: '40%',
      height: 55,
      margin: 7,
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
    },
})