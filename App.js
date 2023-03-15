import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './views/Login';
import { Home } from './views/Home';
import { Details } from './views/Details';
import Singup from './views/Singup';
import './config/config';
import Tractores from './views/Tractores';
import Cajas from './views/Cajas';
import Init from './views/Init';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen name="Init" component={Init} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ title: 'Lista de unidades' }}
				/>
				<Stack.Screen
					name="Details"
					component={Details}
					options={{ title: 'Detalles' }}
				/>
				<Stack.Screen name="Tractores" component={Tractores} />
				<Stack.Screen name="Cajas" component={Cajas} />
				<Stack.Screen
					name="Signup"
					component={Singup}
					options={{ title: 'Registro' }}
				/>
			</Stack.Navigator>
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
