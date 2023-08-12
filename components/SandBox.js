import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function SandBox() {
    return (
        <View style={styles.container}>
            <Text>SandBox</Text>

            <View style={styles.one}>
                <View style={styles.one1}>

                </View>
                <View style={styles.one2}>

                </View>

            </View>
            <View style={styles.two}></View>
            <View style={styles.three}></View>
            <View style={styles.four}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'pink'

    },
    one: {
        padding: 30,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'green'
    },
    one1: {
        padding: 0,
        flex: 1,
        backgroundColor: 'gray'
    },
    one2: {
        padding: 0,
        flex: 1,
        backgroundColor: 'purple'
    },


    two: {
        padding: 40,
        backgroundColor: 'yellow'
    },
    three: {
        padding: 40,
        backgroundColor: 'blue'
    },
    four: {

        padding: 40,
        backgroundColor: 'orange'
    },


})