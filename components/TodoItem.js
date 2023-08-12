import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableWithoutFeedback >
            <View style={styles.content} >
                <TouchableOpacity onPress={() => pressHandler(item.key)}>
                    <AntDesign name="delete" size={30} color="black" />
                </TouchableOpacity>

                <Text style={styles.text} >{item.text}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    content: {
        borderStyle: 'dotted',
        borderColor: "#bbb",
        borderWidth: 1,
        marginBottom: 5,
        marginTop: 5,
        padding: 15,
        borderRadius: 9,
        flexDirection: 'row'
    },
    text: {
        marginLeft: 20
    }
})