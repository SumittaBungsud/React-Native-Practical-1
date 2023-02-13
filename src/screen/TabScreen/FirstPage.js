import { Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Dimensions, View, Animated, Pressable } from 'react-native';
import React, { useState, useRef } from 'react';
import Icon from "react-native-vector-icons/dist/AntDesign";

const lists = [
  {id: 1, name: 'surasak malailang'},
  {id: 2, name: 'somkiet sakcharoen'},
  {id: 3, name: 'surangkana rattana'},
  {id: 4, name: 'sumitta bungsud'},
  {id: 5, name: 'rawisada mulenberg'},
  {id: 6, name: 'weerapat wangwong'},
  {id: 7, name: 'chanapa wangwong'},
  {id: 8, name: 'pitipat saelaew'},
  {id: 9, name: 'tanatat saelim'},
  {id: 10, name: 'sudarat ratthanawong'},
  {id: 11, name: 'suthat bungsud'},
  {id: 12, name: 'thidarat wongtatham'},
  {id: 13, name: 'chalita somsuay'},
  {id: 14, name: 'chanicha suwannatai'},
  {id: 15, name: 'suthida thidawong'},
  {id: 16, name: 'nanticha maprang'},
  {id: 17, name: 'teanchai chantakit'},
  {id: 18, name: 'sharif boonma'},
  {id: 19, name: 'ongart sangsuri'},
  {id: 20, name: 'jittida kraisin'},
];

const menuTab = [
  '1,2', '3,4', '5,6', '7,8', '9,10', '11,12', '13,14', '15,16', '17,18', '19,20',
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function FirstPage() {
  const [ currentIndex, setCurrentIndex ] = useState(0);

  const scrollRef = useRef(null);
  const goTop = () =>{
    scrollRef.current.scrollToIndex({ index: 0 });
    console.log('Go to Top');
  };
  const goEnd = () =>{
    scrollRef.current.scrollToIndex({ index: lists.length - 1 });
    console.log('Go to End');
  };

  const slidesRef = useRef(null);
  const setMiddle = (index) => {
    slidesRef.current.scrollToIndex({ index: index });

    if(index > 0) scrollRef.current.scrollToIndex({ index: index * 2 });
    else scrollRef.current.scrollToIndex({ index: index });  
  }

  return (
    <SafeAreaView style={styles.body}>
      
      <FlatList
        data={menuTab}
        renderItem={({ item, index }) => 
          <Pressable 
            style={[styles.tab, currentIndex == index ? styles.tabOn:null]}
            onPress={() => {
              setCurrentIndex(index)
              setMiddle(index)
            }}
            >
            <Text 
              style={{fontWeight: 'bold', color: currentIndex == index ? '#baa3fc':'#000'}}
              > {item} </Text> 
          </Pressable>
        }
        showsHorizontalScrollIndicator={false}
        horizontal
        ref={slidesRef}
        />
      
      <FlatList 
        data={lists}
        renderItem={({ item }) => 
          <TouchableOpacity style={styles.box}>
            <Text style={styles.boxinner}>{item.id}</Text>
            <Text style={styles.boxinner}>{item.name}</Text>
          </TouchableOpacity>
        }
        showsVerticalScrollIndicator={false}
        ref={scrollRef}
        />
      <TouchableOpacity style={[styles.floatbt,{backgroundColor: '#ffd427', bottom: (WIDTH * 0.13) + 50, right: 20,}]} onPress={goTop}>
        <Icon name='up' size={31} color='#000'/>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.floatbt,{backgroundColor: '#c90076', bottom: 30, right: 20,}]} onPress={goEnd}>
        <Icon name='down' size={31} color='#eeeeee'/>
      </TouchableOpacity>
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
    box: {
      flexDirection: 'row',
      alignItems: 'space-between',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderColor: '#999999',
      borderWidth: 0.7,
      borderRadius: 10,
      margin: 10,
      width: '90%',
    },
    boxinner: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 15,
      marginVertical: 20,
    },
    floatbt: {
      position: 'absolute',
      width: WIDTH * 0.13,
      height: WIDTH * 0.13,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: WIDTH * 0.13 / 2,
      bottom: 30, right: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.7,
      shadowRadius: 15,
      elevation: 15,
    },
    tab: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: HEIGHT * 0.07,
      width: WIDTH / 4,
      marginBottom: 10,
    },
    tabOn: {
      borderBottomWidth: 5,
      borderBottomColor: '#baa3fc',
    },
    dot: {
      position: 'absolute',
      height: 10,
      borderRadius: 5,
      backgroundColor: '#000',
      top: (HEIGHT * 0.07) - 10,
      alignSelf: 'center',
    },
});