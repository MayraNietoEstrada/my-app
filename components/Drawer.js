import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import {
	Button,
	DrawerLayoutAndroid,
	Text,
	StyleSheet,
	View,
} from 'react-native';

const Drawer = () => {
	const navigation = useNavigation();
	const drawer = useRef(null);

	const navigate = (link) => {
		navigation.navigate(link);
		drawer.current?.closeDrawer();
	};

	const navigationView = () => (
		<View style={[styles.drawer, styles.navigationContainer]}>
			<Button
				title="Unidades"
				style={styles.buttonDrawer}
				onPress={() => navigate('Home')}
			/>
			<Button
				title="Cajas"
				style={styles.buttonDrawer}
				onPress={() => navigate('Cajas')}
			/>
			<Button
				title="Tractores"
				style={styles.buttonDrawer}
				onPress={() => navigate('Tractores')}
			/>
		</View>
	);

	return (
		<DrawerLayoutAndroid
			ref={drawer}
			drawerWidth={300}
			drawerPosition={'left'}
			renderNavigationView={navigationView}
		></DrawerLayoutAndroid>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 16,
	},
	navigationContainer: {
		backgroundColor: '#ecf0f1',
	},
	drawer: {
		flexDirection: 'column',
		padding: 10,
	},
	buttonDrawer: {
		marginTop: 10,
	},
	paragraph: {
		padding: 16,
		fontSize: 15,
		textAlign: 'center',
	},
});

export default Drawer;
