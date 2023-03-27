import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './views/Login';
import { Home } from './views/Home';
import { Details } from './views/Details';
import Singup from './views/Singup';
import './config/config';
import Tractores from './views/Tractores';
import Cajas from './views/Cajas';
import Init from './views/Init';
import { useState } from 'react';
import Nueva from './views/Nueva';

const Drawer = createDrawerNavigator();

export default function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	return (
		<NavigationContainer>
			<Drawer.Navigator useLegacyImplementation={true} initialRouteName="Login">
				<Drawer.Screen
					name="Home"
					component={Home}
					options={{ title: 'Lista de unidades' }}
				/>
				<Drawer.Screen
					name="Details"
					component={Details}
					options={{ title: 'Detalles' }}
				/>
				<Drawer.Screen name="Tractores" component={Tractores} />
				<Drawer.Screen name="Cajas" component={Cajas} />
				<Drawer.Screen
					name="Crear Unidad"
					component={Nueva}
					options={{ title: 'Crear unidad' }}
				/>
				<Drawer.Screen
					name="Signup"
					component={Singup}
					options={{ title: 'Registro' }}
				/>

				<Drawer.Screen name="Login" component={Login} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
