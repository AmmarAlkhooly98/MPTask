import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function BottomNavBar() {
	return (
		<View style={styles.container}>
			<Text>This is the bottom navbar!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		overflow: 'hidden',
		backgroundColor: '#333',
		paddingBottom: 48,
		bottom: 0,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
