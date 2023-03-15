import React from 'react';
import { Button, StyleSheet, View } from "react-native";

const Init = ({ navigation }) => {
	return (
		<View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
			<Button
				title="Entrar"
				onPress={() => navigation.navigate('Login')}
        color="red"
			/>
			<Button
				title="Registrarse"
				onPress={() => navigation.navigate('Signup')}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
})

export default Init;
