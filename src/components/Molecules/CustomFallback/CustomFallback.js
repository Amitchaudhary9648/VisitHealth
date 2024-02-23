import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'


const CustomFallback = ({ error, resetError }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Something happened!</Text>
            <Text>{error.toString()}</Text>
            <Button onPress={resetError} title={'Try again'} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CustomFallback