import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native';
import { Item } from '../components/Item';
import { getCajas } from '../functions/getCajas';
import { getTractores } from '../functions/getTractores';

export function Home({ navigation }) {
	const [unidades, setUnidades] = useState([]);

	useEffect(() => {
		(async function fetchData() {
			const tractores = await getTractores();
			const cajas = await getCajas();
			setUnidades([...tractores, ...cajas]);
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
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	},
});
