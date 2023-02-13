import { StyleSheet, View } from 'react-native'
import React from 'react'

export default function TextboxSimple({ 
    placeholder, 
    onChangeText = () => {},
    ...props
 }){
  return (
    <View>
      <TextInput 
            style={styles.textBox} 
            {...props}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    textBox: {
        width: '70%',
        marginVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: '#898989',
    },
})