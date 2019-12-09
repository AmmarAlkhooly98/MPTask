import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class Home extends React.Component {
	render() {
		return (
			<View>
				<Text>This is the HOME screen!</Text>
			</View>
		);
	}
}

const mapStateToProps = (state) => {};

export default connect(mapStateToProps)(Home);
