/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';

class BottomNavBar extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				{/* <View style={styles.navBar}>
					<View style={styles.rightNav}>
						<TouchableOpacity>
							<Icon style={styles.navItem} name="search" size={25} />
						</TouchableOpacity>
						<TouchableOpacity>
							<Icon style={styles.navItem} name="account-circle" size={25} />
						</TouchableOpacity>
					</View>
				</View> */}

				<View style={styles.tabBar}>
					<TouchableOpacity style={styles.tabItem}>
						<Icon name="grip-lines" size={25} />
						<Text style={styles.tabTitle}>Home</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.tabItem}>
						<Icon name="shopping-basket" size={25} />
						<Text style={styles.tabTitle}>Trending</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.tabItem}>
						<Icon name="md-trophy" size={25} />
						<Text style={styles.tabTitle}>Subscriptions</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.tabItem}>
						<Icon name="emotsmile" size={25} />
						<Text style={styles.tabTitle}>Library</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	navBar: {
		height: 55,
		backgroundColor: 'white',
		elevation: 3,
		paddingHorizontal: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	rightNav: {
		flexDirection: 'row'
	},
	navItem: {
		marginLeft: 25
	},
	tabBar: {
		backgroundColor: 'white',
		elevation: 6,
		backgroundColor: 'white',
		height: 60,
		borderTopWidth: 0.5,
		borderColor: '#E5E5E5',
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	tabItem: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	tabTitle: {
		fontSize: 11,
		color: '#3c3c3c',
		paddingTop: 4
	}
});

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps)(BottomNavBar);
