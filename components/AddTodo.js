import { Text, View,Button,TextInput,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function AddTodo({onSubmitHandler})  {

  const [text,setText]=useState('')
 
  changeTextHandler=(text)=>{

    setText(text)
   
  }

    return (
      <View>
        <TextInput  style={styles.textBox} onChangeText={changeTextHandler}  placeholder='new todo' />
       
       <View style={styles.button}>

        <Button onPress={()=>onSubmitHandler(text)} title='Add new Todo'/>
       </View>
      </View>
    )
  
}

const styles=StyleSheet.create({

    textBox:{
       // borderBottomColor:'#bbb',       
        marginBottom:30,
        borderBottomWidth:2,
        paddingHorizontal:5,
        borderStyle:'dotted'
        
    }
   
})