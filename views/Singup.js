import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { signup } from '../functions/signup';

const Singup = ({ navigation }) => {
	const [nombre, setNombre] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const registrar = async () => {
		if (!nombre && !email && !password) {
			alert('Debes de insertar los datos');
		} else {
			await signup({ nombre, email, password });
			alert('Te has registrado correctamente');
			navigation.navigate('Login');
		}
	};

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<TextInput
				style={styles.input}
				placeholder="Nombre"
				onChangeText={(text) => setNombre(text)}
			/>
			<TextInput
				style={styles.input}
				placeholder="Email"
				onChangeText={(text) => setEmail(text)}
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				onChangeText={(text) => setPassword(text)}
				secureTextEntry={true}
			/>
			<View style={styles.buttons}>
				<Button
					style={styles.button}
					title="Regresar"
					color={'tomato'}
					onPress={() => navigation.navigate('Login')}
				/>
				<Button
					style={styles.button}
					title="Registrarme"
					onPress={() => registrar()}
				/>
			</View>
		</View>
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
		width: '70%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});

export default Singup;
