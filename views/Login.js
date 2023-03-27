import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { View, TextInput, Button } from 'react-native';
import { auth } from '../functions/auth';

const Login = () => {
	const [email, onChangeEmail] = useState('');
	const [password, onChangePassword] = useState('');
	const navigation = useNavigation();

	const login = async () => {
		if (email === '' || password === '') {
			return alert('Favor de llenar todos los campos');
		}

		const response = await auth({ email, password });
		if (!response) {
			alert('El usuario no existe');
		} else {
			response.forEach((doc) => {
				navigation.navigate('Home');
			});
		}
	};

	return (
		<SafeAreaView
			style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
		>
			<TextInput
				style={styles.input}
				onChangeText={(text) => onChangeEmail(text)}
				placeholder="Email"
				email
			/>
			<TextInput
				style={styles.input}
				onChangeText={(text) => onChangePassword(text)}
				placeholder="Password"
				textContentType="username"
				secureTextEntry={true}
			/>

			<View style={styles.buttons}>
				<Button
					style={styles.button}
					title="Entrar"
					onPress={() => login()}
					color="#469530"
				/>
				<Button
					title="Registrarse"
					onPress={() => navigation.navigate('Signup')}
					color="#486378"
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		width: '70%',
		borderRadius: 8,
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '70%',
	},
});

export default Login;
