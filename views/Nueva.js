import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import Picker from 'react-native-picker-select';
import { Picker } from '@react-native-picker/picker';
import { Text } from 'react-native';
import { postTractor } from '../functions/getTractores';
import { postCaja } from "../functions/getCajas";
import { useNavigation } from "@react-navigation/native";

const Nueva = () => {
	const [numero_economico, onChangeNumeroEconomico] = useState('');
	const [matricula, onChangeMatricula] = useState('');
	const [tipo, setTipo] = useState('Tractor');
  const navigation = useNavigation();

	const crearUnidad = async () => {
		if (tipo === 'Tractor') {
			await postTractor({ numero_economico, matricula });
      navigation.navigate('Tractores');
		} else {
			await postCaja({ numero_economico, matricula });
      navigation.navigate('Cajas');
		}

		alert('Unidad creada');
	};

  const limpiar = () => {
    onChangeNumeroEconomico('');
    onChangeMatricula('');
  }

	return (
		<SafeAreaView
			style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
		>
			<TextInput
				style={styles.input}
				onChangeText={(text) => onChangeNumeroEconomico(text)}
				placeholder="Numero Economico"
				email
			/>
			<Text>Tipo de Unidad</Text>
			<Picker
				selectedValue={tipo}
				style={{ height: 50, width: 150 }}
				onValueChange={(itemValue, itemIndex) => setTipo(itemValue)}
			>
				<Picker.Item label="Tractor" value="Tractor" />
				<Picker.Item label="Caja" value="Caja" />
			</Picker>
			<TextInput
				style={styles.input}
				onChangeText={(text) => onChangeMatricula(text)}
				placeholder="Placas"
			/>

			<View style={styles.buttons}>
				<Button
					style={styles.button}
					title="Limpiar"
					onPress={() => limpiar()}
					color="tomato"
				/>
				<Button
					style={styles.button}
					title="Crear"
					onPress={() => crearUnidad()}
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
	button: {
		width: '50%',
	},
});

export default Nueva;
