import React , { useState, useEffect } from 'react';
import { SafeAreaView, ImageBackground, Image, View, Text, TextInput, StyleSheet, Alert, Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function LoginScreen({ navigation }) {

    return (
    <SafeAreaView style={styles.body}>
      <ImageBackground 
        style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}
        source={{uri: 'https://cdn.pixabay.com/photo/2022/09/15/06/14/pattern-7455773_960_720.png'}}
        >
        <Image style={{width: WIDTH, height: HEIGHT * 0.25}} source={require ('../../assets/sea-7456253_960_720.jpg') }/>
        <Text style={styles.login}> Login Screen </Text>
        <TextInput 
            style={styles.textBox} 
            placeholder='Enter name' 
            //onChangeText={(value) => setName(value)}
        />
        <TextInput 
            style={styles.textBox} 
            placeholder='Enter age' 
            //onChangeText={(value) => setAge(value)}
        />
        <View style={{flexDirection: 'row'}}>
            <Text 
                style={[styles.button, {backgroundColor: '#5bd5a0', color: '#fff', marginRight: 7}]}
                //onPress={() => setData()}
            > Submit </Text>
            <Text
                style={[styles.button, {backgroundColor: '#36a6e4', color: '#fff', marginLeft: 7}]}
                onPress={() => navigation.navigate('Home')}
            > Go to Home </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body: {
        width: WIDTH,
        height: HEIGHT,
    },
    textBox: {
        width: '70%',
        height: HEIGHT/2 * 0.13,
        marginVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: '#898989',
        borderRadius: 10,
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
    login: {
        paddingVertical: 12, 
        paddingHorizontal: 34,
        marginTop: 30,
        fontSize: 20, 
        fontWeight: 'bold', 
        borderColor: 'white', 
        color: 'white', 
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 50,
    },
})

