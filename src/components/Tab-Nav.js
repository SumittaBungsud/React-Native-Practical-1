import { Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const WIDTH = Dimensions.get('window').width;

export default Tab = ({
    title = '---',
    onFocus = false,
    ...props
}) => {

    return (
        <TouchableOpacity
            style={[styles.menubox, {backgroundColor: onFocus?'#4d8173':'#b7efc8',}]} 
            {...props}
            >
            <Text style={[styles.box, onFocus? {color: '#fff'}:null]}> {title} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    box: {
        marginVertical: 10,
        fontWeight: 'bold',
    },
    menubox: {
        paddingHorizontal: 20, 
        width: WIDTH/3,
        alignItems: 'center',
        borderRightWidth: 1.5,
        borderTopWidth: 3,
        borderBottomWidth: 3,
        borderColor: '#e28484',
    },
})