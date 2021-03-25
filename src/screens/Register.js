import React from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Form from '../components/Form'

const storeData = async (num, callback) => {
	const string = JSON.stringify(num)
	console.log(string)
	try {
		const value = { "mobileNumber": num }
		const jsonValue = JSON.stringify(value)
		await AsyncStorage.setItem(string, jsonValue)
		await callback()
	} catch (e) {
		return Alert.alert('Oops!', 'Account could not be registered. Please try again.')
	}
}

const Register = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>Register</Text>
			<Form
				onSubmit={(num) => {
					storeData(num, () => {
						navigation.navigate('Login')
						// console.log(jsonValue)
					})
				}}
			/>
			<Text onPress={() => navigation.navigate('Login')} style={styles.text}>Already have an account? Login</Text>
		</View>
	)
}

export default Register

const styles = StyleSheet.create({
	container: {
		padding: 15
	},
	headerText: {
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 20
	},
	text: {
		fontSize: 16,
		marginBottom: 5
	}
})

