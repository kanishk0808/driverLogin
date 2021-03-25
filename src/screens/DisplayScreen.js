import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Displayscreen = ({ route }) => {
    const {obj} = route.params
    const [mobileNumber, setMobileNumber] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const fetchData = async(obj) => {
        console.log(obj)
        try {
			const jsonValue = await AsyncStorage.getItem(obj)
            const parsedValue = JSON.parse(jsonValue)
			if (jsonValue) {
				console.log('DisplayScreen', typeof(parsedValue))
				setMobileNumber(parsedValue.mobileNumber)
				setName(parsedValue.name)
				setAge(parsedValue.age)
			} else {
				return Alert.alert('Invalid', 'There was an error fetching data.')
			}
		} catch (e) {
			return Alert.alert('Oops!', 'There was a problem fetching data.')
		}
    }

    useEffect(() => {
        fetchData(obj)
    },[])

    return (
        <View style={styles.container}>
            <Text style={[styles.text, {marginBottom: 20}]}>Driver Details=</Text>
            <Text style={styles.text}>Name: {name}</Text>
            <Text style={styles.text}>Mobile Number: {mobileNumber}</Text>
            <Text style={styles.text}>Age: {age}</Text>
        </View>
    )
}

export default Displayscreen

const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        textAlign: 'center'
    },
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40
    }
})
