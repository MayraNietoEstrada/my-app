import React, { useEffect, useState } from 'react';
import {
	FlatList,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { Item } from '../components/Item';
import { getCajas } from "../functions/getCajas";

const Cajas = ({ navigation }) => {
	const [unidades, setUnidades] = useState([]);

	useEffect(() => {
		(async function fetchData() {
			const data = await getCajas();
			setUnidades([...data]);
		})();
	}, []);
	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={unidades}
				renderItem={({ item }) => <Item item={item} navigation={navigation} />}
				keyExtractor={(item) => item.numero_economico}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	},
});

export default Cajas;

