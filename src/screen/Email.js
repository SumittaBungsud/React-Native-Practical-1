import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
// import ButtonSimple from '../components/button_simple';
import {
  GoogleSigninButton,
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import credentials from '../components/credentials';

export default Email = () => {
    const CLIENT_ID = credentials.installed.client_id;
    const API_KEY = 'AIzaSyBYJdTSTq6yyEtZjIV5EnLJWxP16D7JCjw';
    const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest';
    const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly']; //'https://www.googleapis.com/auth/gmail.send'

  const signin = () => {
    GoogleSignin.configure({
      androidClientId: CLIENT_ID,
    });

    GoogleSignin.hasPlayServices().then((hasPlayService) => {
      if (hasPlayService) {
          GoogleSignin.signIn().then((userInfo) => {
            console.log(JSON.stringify(userInfo, null, 4))
          }).catch((e) => {
            console.log("ERROR IS: " + JSON.stringify(e, null, 4));
            console.log('inner')
          })
      }
    }).catch((e) => {
      console.log("ERROR IS: " + JSON.stringify(e));
      console.log('outter')
    })
  }

  return (
    <View style={styles.body}>
        {/* <ButtonSimple
          text='Sign in with Google'
          fontColor='#fff'
          buttonColor='#31a2f7'
          onPress={()=> signin()}
          /> */}
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => signin()}
          />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    alignContent: 'center',
    justifyContent: 'center',
  },
})