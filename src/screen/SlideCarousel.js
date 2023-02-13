import { FlatList, ScrollView, SafeAreaView, View, Text, Image, StyleSheet, Dimensions, Animated } from 'react-native'
import React, { useState, useRef } from 'react'
import ButtonSimple from '../components/button_simple'
import NextButton from '../components/NextButton'

const images = [
    'https://cdn.pixabay.com/photo/2022/10/03/23/41/house-7497001_960_720.png',
    'https://cdn.pixabay.com/photo/2022/09/15/11/14/sea-7456253_960_720.jpg',
    'https://cdn.pixabay.com/photo/2022/10/03/23/41/house-7497002_960_720.png',
    'https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_960_720.jpg',
    'https://cdn.pixabay.com/photo/2015/12/09/01/02/mandalas-1084082_960_720.jpg',
]
const contents = [
    {name: 'THE FIRST BLOCK', color: '#8ed9e7'},
    {name: 'THE SECOND BLOCK', color: '#b4a7d6'},
    {name: 'THE THIRD BLOCK', color: '#bedcb1'},
    {name: 'THE FORTH BLOCK', color: '#9eaaec'},
    {name: 'THE FIFTH BLOCK', color: '#ecd29e'},
]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function SlideCarousel({ navigation }) {

    const [ imgActive, setImgActive] = useState(0);
    const [ contentActive, setContentActive] = useState(0);
    const [ currentIndex, setCurrentIndex ] = useState(0);
    
    const onChangeImg = (nativeEvent) => {
        if(nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if(slide != imgActive) {
                setImgActive(slide);
            }
        }
    }

    const onChangeContent = (nativeEvent) => {
        if(nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if(slide != contentActive) {
                setContentActive(slide);
            }
        }
    }

    const viewableItemsChanged = useRef(({ viewableItems }) => 
        setCurrentIndex(viewableItems[0].index)
    ).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
    const slidesRef = useRef(null);
    const scrollX = useRef(new Animated.Value(0)).current;

    const scrollTo = () => {
        if(currentIndex < images.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
            console.log('Last item.');
        }
    };
    
  return (
    <SafeAreaView style={styles.container} >
{/* ===== ELEMENTS 1 ===== */}
      <View>
        <FlatList
            data={images}
            renderItem={({ item }) => <Image
                                            key={item}
                                            resizeMode='stretch'
                                            style={styles.wrapimg}
                                            source={{uri: item}}
                                        />
            }
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                useNativeDriver: false,
            })} 
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
        />
        <View style={styles.wrapDot}>
            {   
                images.map((e, i) => {

                    const inputRange = [(i-1) * WIDTH, i * WIDTH, (i+1) * WIDTH];
                    const dotWidth = scrollX.interpolate({
                        inputRange,
                        outputRange: [10, 20, 10],
                        extrapolate: 'clamp',
                    });
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp',
                    });
                    return <Animated.View style={[styles.dotnew, {width: dotWidth, opacity}]} key={e} />;
                })
            }
        </View> 
      </View>
      
      <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / images.length)}/>

{/* ===== ELEMENTS 2 ===== */}
      <View>
        <FlatList
            data={contents}
            renderItem={({ item }) => <View key={item.name} style={[styles.wrapcontent,{backgroundColor: item.color}]} >
                                            <Text> {item.name} </Text>
                                      </View>
            }
            onScroll={({nativeEvent}) => onChangeContent(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            />
        <View style={styles.wrapDot}>
            {   
                contents.map((e, index) => 
                    <Text 
                        key={e.name} 
                        style={contentActive == index ? styles.dotActive : styles.dot}
                        > ● </Text>
                )
            }
        </View> 
      </View>

      <ButtonSimple 
        text='Go to Home'
        buttonColor='#36a6e4'
        onPress={() => navigation.navigate('Home')}
        />
    </SafeAreaView>
  )
}
SlideCarousel

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapimg: {
        width: WIDTH,
        height: HEIGHT * 0.25,
        marginVertical: 5,
    },
    wrapcontent: {
        width: WIDTH,
        height: HEIGHT * 0.25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapDot: {
        position: 'absolute',
        flexDirection: 'row',
        bottom: HEIGHT * 0.25 * 0.05,
        alignSelf: 'center',
    },
    dotActive: {
        margin: WIDTH * 0.02,
        color: '#000',
    },
    dot: {
        margin: WIDTH * 0.02,
        color: '#fff'
    },
    dotnew: {
        height: 10,
        borderRadius: 5,
        backgroundColor: '#000',
        marginHorizontal: 9,
        marginVertical: 5,
    }
})