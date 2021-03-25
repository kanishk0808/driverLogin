import React from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Form from '../components/Form'

const Login = ({ navigation }) => {

	const getData = async (num) => {
		const string = JSON.stringify(num)
		try {
			const jsonValue = await AsyncStorage.getItem(string)
			// return jsonValue != null ? JSON.parse(jsonValue) : null;
			if (jsonValue) {
				console.log('Login', jsonValue)
				return navigation.navigate('Homescreen', { obj: string })
			} else {
				return Alert.alert('Invalid', 'There is no account by this number, please register.')
			}
		} catch (e) {
			return Alert.alert('Oops!', 'There was a problem getting to your account.')
		}
	}


	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>Login</Text>
			<Form
				onSubmit={(num) => getData(num)}
			/>
			<Text onPress={() => navigation.navigate('Register')} style={styles.text}>Don't have an account? Register</Text>
		</View>
	)
}

export default Login

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

