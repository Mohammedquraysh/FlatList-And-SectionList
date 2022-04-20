import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native';

export default function App() {

  const[Item, setItem] = useState([
    { Item: 'item 1'},
    {Item: 'item 2'},
    {Item: 'item 3'},
    {Item: 'item 4'},
    {Item: 'item 5'},
    {Item: 'item 6'},
    {Item: 'item 7'},
    {Item: 'item 8'},
    {Item: 'item 9'}
  ])
  return (
    <FlatList
    horizontal
    inverted
    keyExtractor={(item, index)=>index.toString}
    data={Item}
    renderItem={({item})=>(
      <View style={styles.item}>
       <Text style={styles.text}>{item.Item} </Text>
      </View>
    )}/>
    // <ScrollView style={styles.container}>
    //   {
    //     Item.map((i)=>{
    //       return(
    //         <View style={styles.item}>
    //           <Text style={styles.text}>{i.Item} </Text>
    //         </View>
    //       )
    //     })
    //   }
    // </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff', 
    flexDirection: 'column'
    
  },
  item:{
    backgroundColor: '#000',
    margin: 50,
    justifyContent:'center',
    alignItems: 'center'
    
  },
  text:{
    color: '#fff',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10
  }
});
