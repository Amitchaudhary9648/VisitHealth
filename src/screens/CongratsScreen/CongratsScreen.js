import { View,  StyleSheet } from 'react-native'
import React from 'react'

const CongratsScreen = ({}) => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>Congrats Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CongratsScreen