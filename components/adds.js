import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class Adds extends React.Component {
	render() {
		return (
			<View>
				<Text>This is an add!</Text>
			</View>
		);
	}
}

return {};
const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps)(Adds);
