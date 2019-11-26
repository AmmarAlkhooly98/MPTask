import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/homeScreen';
import BottomNavBar from './components/bottomNavigation';

export default function App() {
	return (
		<View style={styles.container}>
			<Home />
			<Text>Open up App.js to start working on your app yoooo ammar</Text>
			<View>
				<BottomNavBar />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
