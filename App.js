import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/homeScreen';
import BottomNavBar from './components/bottomNavigationTab';

export default function App() {
	return (
		<View>
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
