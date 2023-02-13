import { View, StyleSheet, ScrollView, SafeAreaView, Dimensions, Linking, Alert } from 'react-native'
import React from 'react'
import {
  GoogleSigninButton,
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import TextboxEmail from '../../components/TextboxEmail ';
import ButtonSimple from '../../components/button_simple';
import { openEmail } from '../../components/openEmail';

import { setTo, setSub,setMsg } from '../../../redux/mailReducer'
import { useSelector, useDispatch } from 'react-redux';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function ThirdPage()  {
  
  const CLIENT_ID = '806746644771-bi1l796nrmlel3korf68dmoo7524ah86.apps.googleusercontent.com';
  const { to, subject, msg } = useSelector(state => state.mailbody);
  const dispatch = useDispatch();

  const signin = () => {
    GoogleSignin.configure({
      androidClientId: CLIENT_ID,
    });

    GoogleSignin.hasPlayServices().then((hasPlayService) => {
      if (hasPlayService) {
          GoogleSignin.signIn().then((userInfo) => {
            console.log(JSON.stringify(userInfo))
          }).catch((e) => {
            console.log("ERROR IS: " + JSON.stringify(e));
          })
      }
    }).catch((e) => {
      console.log("ERROR IS: " + JSON.stringify(e));
    })
  }

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
      <View style={{margin: 15, flexDirection: 'column', alignContent: 'center', justifyContent: 'center',}}>
        <TextboxEmail 
          placeholder='Mail to'
          onChangeText={(value) => dispatch(setTo(value))}
          value={to}
          />
        <TextboxEmail 
          placeholder='Subject'
          onChangeText={(value) => dispatch(setSub(value))}
          value={subject}
          />
        <TextboxEmail 
          placeholder='Messages'
          onChangeText={(value) => dispatch(setMsg(value))}
          value={msg}
          />

        <View style={{flexDirection: 'row', padding: 10, alignContent: 'center'}}>
          <ButtonSimple 
            text='Submit'
            onPress={() => {
              to.includes('@') && to.includes('.com') ?
                openEmail(to, subject, msg).then(() => {
                  console.log('Your box was successfully opened!')})
              : Alert.alert(
                "Warning",
                "Please fill email you will send to",
                [{ text: "OK",},]
              )
            }}
            /> 
          <GoogleSigninButton
            style={{ width: 192, height: 48, margin: 10 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => signin()}
            />
        </View>
      </View>
      
      <View style={styles.btnbox}>
        <ButtonSimple 
          text='FaceBook'
          buttonColor='#076dca'
          onPress={() => Linking.openURL('https://www.facebook.com/')}
          /> 
        <ButtonSimple 
          text='YouTube'
          buttonColor='#e12626'
          onPress={() => Linking.openURL('https://www.youtube.com/')}
          />
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: WIDTH,
  },
  btnbox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
})