import { SafeAreaView, StyleSheet, Text, View, Animated, Image, Dimensions } from 'react-native'
import React, { useEffect, useRef }  from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ButtonSimple from '../components/button_simple';
import Logo from '../../assets/logo.png'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const BGColor = '#4d4a95';

export default function SplashScreen({ navigation })  {
  // SafeArea Value...
  const edges = useSafeAreaInsets();
  // Animation Value...
  const startAnimation = useRef(new Animated.Value(0)).current;
  const scaleLogo = useRef(new Animated.Value(1)).current;
  const scaleTitle = useRef(new Animated.Value(1)).current;
  // Offset Animation...
  const moveLogo = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const moveTitle = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
    
    useEffect(() => {
      // Start Animation After 750m...
      setTimeout(() => {
        // Sequence Animation...
        Animated.parallel([
            Animated.timing(
              startAnimation,
              {
                toValue: (edges.top + 80) - HEIGHT,
                useNativeDriver: true,
              }
            ),
            Animated.timing(
              scaleLogo,
              {
                toValue: 0.35,
                useNativeDriver: true,
              }
            ),
            Animated.timing(
              scaleTitle,
              {
                toValue: 1,
                useNativeDriver: true,
              }
            ),
            Animated.timing(
              moveLogo,
              {
                // Moving to right most...
                toValue: {
                  x: WIDTH/2 - 40,
                  y: HEIGHT/2 - 20,
                },
                useNativeDriver: true,
              }
            ),
            Animated.timing(
              moveTitle,
              {
                // Moving to right most...
                toValue: {
                  x: 0,
                  y: HEIGHT/3 - 10,
                },
                useNativeDriver: true,
              }
            ),
            
        ]).start();
        
      }, 750);

    }, []);

  return (

    <SafeAreaView style={styles.body}>
      <Animated.View 
        style={[styles.imgout, {
            transform: [
              { translateY: startAnimation },
            ],
        }]}
        >
          <Animated.Image 
            source={Logo} 
            style={[styles.imgin, {
              transform: [
                { translateX: moveLogo.x },
                { translateY: moveLogo.y },
                { scale: scaleLogo },
              ],
            }]}
            />
          <Animated.Text 
            style={[styles.txt, {
              transform: [
                { translateX: moveTitle.x },
                { translateY: moveTitle.y },
                { scale: scaleTitle },
              ],
            }]}
            >Lumen</Animated.Text>
      </Animated.View>

      <Animated.View style={styles.winout}>
        <ButtonSimple 
          text='Home'
          fontColor='#fff'
          buttonColor='#dfb18c'
          onPress={() => navigation.navigate('Home')} 
          />
      </Animated.View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    body: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: WIDTH,
      height: HEIGHT,
    },
    imgout: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: BGColor,
      width: WIDTH,
      height: HEIGHT,
      zIndex: 1,
    },
    imgin: {
      width: 200,
      height: 200,
      paddingBottom: 20,
    },
    txt: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white',
    },
    winout: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#c5e2b7',
      zIndex: 0,
    },
})