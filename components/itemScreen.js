import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class Item extends React.Component {
	render() {
		return (
			<View>
				<Text>This is the item screen!</Text>
			</View>
		);
	}
}

const mapStateToProps = (state) => {};

export default connect(mapStateToProps)(Item);
