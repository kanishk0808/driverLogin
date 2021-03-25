import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Homescreen = ({ navigation, route }) => {
    const { obj } = route.params
    console.log('Homescreen', obj)

    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    // const getData = async (obj) => {
    //     try {
    //         const jsonValue = await AsyncStorage.getItem(obj)
    //         // return jsonValue != null ? JSON.parse(jsonValue) : null;
    //         if (jsonValue) {
    //             setName()
    //         } else {
    //             return Alert.alert('Invalid', 'There is no account by this number, please register.')
    //         }
    //     } catch (e) {
    //         return Alert.alert('Oops!', 'There was a problem fetching data.')
    //     }
    // }

    // useEffect(()=>{
    //     getData(obj)
    // },[])

    const saveData = async (callback) => {
        try {
            const value = {
                "mobileNumber": obj,
                "name": name,
                "age": age
            }
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(obj, jsonValue).then(()=> console.log(jsonValue))
            callback()
        } catch (e) {
            return Alert.alert('Oops!', 'Data could not be saved. Please try again.')
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Name</Text>
            <TextInput style={styles.input} onChangeText={(text) => setName(text)} />
            <Text style={styles.text}>Age</Text>
            <TextInput style={styles.input} onChangeText={(text) => setAge(text)} />
            <TouchableOpacity style={styles.button} onPress={() => saveData(() => navigation.navigate('DisplayScreen', { obj: obj }))}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Homescreen

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        marginBottom: 10,
        fontSize: 18
    },
    button: {
        padding: 20,
        backgroundColor: '#0000ff99',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10
    },
    text: {
        fontSize: 16,
        marginBottom: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: 16
    }
})
