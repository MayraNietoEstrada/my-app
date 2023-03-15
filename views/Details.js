import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { View, Text, Button } from 'react-native';

export function Details({ route, navigation }) {
	const { numero_economico, tipo, matricula } = route.params;

	useEffect(() => {}, []);

	return (
		// <View
		// 	style={{
		// 		flex: 1,
		// 		alignItems: 'center',
		// 		justifyContent: 'center',
		// 	}}
		// >
		<SafeAreaView
			style={{
				backgroundColor: '#303030',
				padding: 30,
				// width: '90%',
				height: '70%',
				// borderRadius: '8px',
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			{tipo === 'caja' ? (
				<Image style={styles.image} source={require('../assets/caja.png')} />
			) : (
				<Image style={styles.image} source={require('../assets/tractor.png')} />
			)}

			<Text
				style={{
					fontSize: 32,
					textTransform: 'uppercase',
					color: '#fff',
					textAlign: 'center',
				}}
			>
				Numero economico: {numero_economico}
			</Text>

			<Text
				style={{
					fontSize: 32,
					textTransform: 'uppercase',
					color: '#fff',
					textAlign: 'center',
				}}
			>
				Matricula: {matricula}
			</Text>

			<View style={styles.buttons}>
				<Button
					style={styles.button}
					title="Regresar"
					onPress={() => navigation.navigate('Home')}
				/>
			</View>
		</SafeAreaView>
		// </View>
	);
}

const styles = StyleSheet.create({
	button: {
		marginTop: 50,
		color: '#fff',
	},
	image: {
		width: 100,
		height: 100,
	},
	buttons: {
		flexDirection: 'row'
	}
});
