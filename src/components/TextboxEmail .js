import { StyleSheet, TextInput, View, Dimensions } from 'react-native'
import React, { useState } from 'react'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default TextboxEmail = ({ 
    placeholder='your Email',
    color='#f28136', 
    onChangeText={},
    ...props 
}) => {

    const [ isfocus, setIsfocus ] = useState(false)
  return (
    <View 
        style={[styles.box, {
            borderStartWidth: isfocus? 8:0.8,
            borderColor: isfocus? color:'#5b5959',
        }]}
        onFocus={() => setIsfocus(true)}
        onBlur={() => setIsfocus(false)}
        >
        <TextInput 
            style={styles.input} 
            placeholder={placeholder} 
            onChangeText={onChangeText}
            {...props}
            />
    </View>
  )
}

const styles = StyleSheet.create({
    box: {
        justifyContent: 'center',
        width: WIDTH * 0.85,
        height: HEIGHT * 0.075,
        backgroundColor: '#fff',
        borderWidth: 0.8,
        borderRadius: 7,
        margin: 15,
    },
    input: {
        fontSize: 18,
        paddingHorizontal: 25,
        color: '#5b5959',
    },
})