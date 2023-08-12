import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title} >Nipun's Todo List</Text>
    </View>
  )
}


const styles=StyleSheet.create({

    header:{
        backgroundColor:'coral',
        height:80,
        paddingTop:35,
        

    },
    title:{
        textAlign:'center',
        fontSize:30,
        color:'white',
        fontWeight:'bold'
    }

})