import { View, Text, StyleSheet, SafeAreaView, Pressable, Image, PermissionsAndroid } from 'react-native'
import React, { useState } from 'react'
import ButtonSimple from '../components/button_simple'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function CameraScreen({ navigation }) {
    const [ imageCamera, setImageCamera] = useState(null)
    const [ imageGallery, setImageGallery] = useState(null)
    
    const requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: "App Camera Permission",
              message:"App needs access to your camera ",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK",
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Camera permission given");
          } else {
            console.log("Camera permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
    }

    const openCamera = () => {
        requestCameraPermission()
        const option = {
            mediaType: 'photo',
            quality: 1,
        }
        launchCamera(option, (res) => {
            if(res.didCancel) {
                console.log('User Cancelled image picker')
            }else if(res.errorCode) {
                console.log(res.errorMessage)
            }else{
                const data = res.assets[0]
                setImageCamera(data)
                console.log(data)
            }
        })
    }

    const openGallery = () => {
        const option = {
            mediaType: 'photo',
            quality: 1,
        }
        launchImageLibrary(option, (res) => {
            if(res.didCancel) {
                console.log('User Cancelled image picker')
            }else if(res.errorCode) {
                console.log(res.errorMessage)
            }else{
                const data = res.assets[0]
                setImageGallery(data)
                console.log(data)
            }
        })
    }

  return (
    <SafeAreaView style={styles.body} >
        <Text>Camera</Text>
        <View style={{flexDirection: 'row',}}>
            {
                imageCamera != null &&
                <Image 
                    style={styles.img}
                    source={{uri: imageCamera.uri}}
                    />
            }
            {
                imageGallery != null &&
                <Image 
                    style={styles.img}
                    source={{uri: imageGallery.uri}}
                    />
            }
        </View>
        <View style={{flexDirection: 'row',}}>
            <Pressable style={styles.btn} onPress={openCamera}>
                <Text>Open Camera</Text>
            </Pressable>

            <Pressable style={styles.btn} onPress={openGallery}>
                <Text>Open Gallery</Text>
            </Pressable>
        </View>
        <ButtonSimple 
            text='Go Home'
            onPress={() => navigation.navigate('Home')}
            />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        padding: 10,
        margin: 10,
        backgroundColor: 'skyblue',
    },
    img: {
        height: 100,
        width: 100,
        marginHorizontal: 12,
    },
})