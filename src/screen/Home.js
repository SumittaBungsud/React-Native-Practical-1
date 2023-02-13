import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import ButtonSimple from '../components/button_simple'

import { isLoading } from '../../redux/processReducer';
import { useSelector, useDispatch } from 'react-redux';


export default function HomeScreen({ navigation }) {

    const { loading } = useSelector(state => state.process);
    const dispatch = useDispatch();

    return (
      
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{flexDirection: 'row',}}>
                <Image style={{width: 100, height: 100, margin: 10,}} source={require ('../../assets/house-7497002_960_720.png')}/>
                <Image style={{width: 100, height: 100, margin: 10,}} source={{uri: 'https://cdn.pixabay.com/photo/2022/09/22/08/09/halloween-7471880_960_720.png'}}/>
            </View>
            <View style={{flex: 1, flexWrap: 'wrap'}}>
                <Text
                    style={[styles.button, {backgroundColor: '#f75656', color: '#f3f6f4',}]}
                    onPress={() => removeData()}
                    > Remove </Text>
                <Text
                    style={[styles.button, {backgroundColor: '#ffd966', color: '#5b5b5b',}]}
                    onPress={() => navigation.navigate('Map')}
                    > Google Map </Text>
                <ButtonSimple
                    text="Go to Login"
                    onPress={() => navigation.navigate('Login')} 
                    />
                <ButtonSimple 
                    text='Open Camera'
                    buttonColor='#c71b80'
                    onPress={() => navigation.navigate('Camera')}
                    />
                <ButtonSimple 
                    text='Swipe Slider'
                    fontColor='#5b5b5b'
                    buttonColor='#f6b26b'
                    onPress={() => navigation.navigate('Slider')}
                    />
                <ButtonSimple 
                    text='Market place'
                    fontColor='#5b5b5b'
                    buttonColor='#9ae4de'
                    onPress={() => navigation.navigate('Market')}
                    />
                <ButtonSimple 
                    text='Splash'
                    fontColor='#fff'
                    buttonColor='#741b47'
                    onPress={() => navigation.navigate('Splash')}
                    />
                <ButtonSimple 
                    text='Email'
                    fontColor='#fff'
                    buttonColor='#199885'
                    onPress={() => navigation.navigate('Email')}
                    />
            </View>
        </SafeAreaView> 
      
    );
}

const styles = StyleSheet.create({
    textBox: {
        fontFamily: 'PatrickHand-Regular',
        fontSize: 34,
        marginVertical: 15,
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
})

