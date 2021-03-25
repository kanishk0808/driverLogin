import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, TextInput, Alert } from 'react-native'

const Form = ({ onSubmit }) => {

    const [num, setNum] = useState('')

    const lengthCheck = (num) => {
        if (num.length < 10) {
            Alert.alert('Invalid!', 'Mobile Number must be 10 letters.')
        } else {
            onSubmit(num)
        }
    }

    return (
        <>
            <Text style={styles.text}>Mobile Number</Text>
            <TextInput
                style={styles.input}
                keyboardType='number-pad'
                maxLength={10}
                selectionColor='#0000ff99'
                onChangeText={(text) => setNum(text)}
            />
            <TouchableOpacity style={styles.button} onPress={() => lengthCheck(num)}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </>
    )
}

export default Form

const styles = StyleSheet.create({
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
