import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { Text, TouchableOpacity } from 'react-native';
import { TextInput } from "react-native-web";

export const Item = ({ item, navigation }) => {
	return (
		<TouchableOpacity
			style={styles.item}
			onPress={() =>
				navigation.navigate('Details', { ...item })
			}
		>
			<Text style={styles.title}>
				{item.numero_economico}
			</Text>
			{item.tipo === 'caja' ? (
				<Image style={styles.image} source={require('../assets/caja.png')} />
			) : (
				<Image style={styles.image} source={require('../assets/tractor.png')} />
			)}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#303030',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
		borderRadius: 8,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	title: {
		color: '#fff',
		textTransform: 'uppercase',
		fontSize: 16,
	},
	image: {
		width: 60,
		height: 60,
	},
});
