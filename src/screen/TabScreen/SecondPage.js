import { View, Text, StyleSheet, SafeAreaView, Dimensions, FlatList } from 'react-native'
import React, { useState } from 'react'
import SelectList from 'react-native-dropdown-select-list'

const data = [
  { key:'1', value:'Jammu & Kashmir' },
  { key:'2', value:'Gujrat' },
  { key:'3', value:'Maharashtra' },
  { key:'4', value:'Goa' },
  { key:'5', value:'Lalolo' },
  { key:'6', value:'Stitch dog' },
  { key:'7', value:'Simba' },
  { key:'8', value:'Nala' },
  { key:'9', value:'Ariel' },
  { key:'10', value:'Melody' },
];
const value = [
  { key:'1', value: 'Odd' }, 
  { key:'2', value: 'Even' },
];
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const numColumns = 2
const marginItem = 5

export default function SecondPage() {
  const [selected, setSelected] = useState("");
  const [item, setItem] = useState(data);

  const onSelect= (selected) => {
    const itemLaunch = data.filter((e, index) => {
      if(selected == '1') return index%2 == 0
      else return index%2 > 0
    })
    setItem(itemLaunch)
  }
  
  return (
    <SafeAreaView style={styles.body}>
        <SelectList 
          data={value} 
          setSelected={setSelected}
          onSelect={() => onSelect(selected)}
          // defaultOption={value[0]}
          boxStyles={styles.boxStyles}
          // inputStyles={}
          dropdownStyles={styles.dropdownStyles}
          // dropdownItemStyles={}
          // dropdownTextStyles={}
        />  
        <View style={styles.bodyflat}>
          <FlatList
            data={item}
            renderItem={({ item }) => 
              <View style={styles.frame}>
                <Text style={styles.item}>{item.key}</Text>
                <Text style={styles.item}>{item.value}</Text>
              </View>
            }
            showsVerticalScrollIndicator={false}
            numColumns={numColumns}
          />
        </View>  
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    width: WIDTH,
  },
  bodyflat: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
  },
  frame: {
    margin: marginItem,
    backgroundColor: "#741b47",
    alignItems: 'center',
    justifyContent: 'center',
    height: WIDTH / numColumns - 2 * marginItem,
    width: WIDTH / numColumns - 2 * marginItem,
    borderRadius: 15,
  },
  item: {
    color: 'white',
    padding: 15,
  },
  boxStyles: {
    margin: 15,
    width: '80%',
    alignSelf: 'center',
  },
  dropdownStyles: {
    margin: 15,
    width: '80%',
    alignSelf: 'center',
  },
})

