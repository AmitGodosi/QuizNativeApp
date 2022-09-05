import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MenuPage from './pages/MenuPage';
import TriviaPage from './pages/TriviaPage';

export default function App() {
	return (
		<View style={styles.container}>
			<TriviaPage />
			{/*<MenuPage />*/}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
});
