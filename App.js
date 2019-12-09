import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/homeScreen';
import BottomNavBar from './components/bottomNavigationTab';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from './store';

export default function App() {
	return (
		<Provider store={store}>
			<View>
				<View>
					<BottomNavBar />
				</View>
			</View>
		</Provider>
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
