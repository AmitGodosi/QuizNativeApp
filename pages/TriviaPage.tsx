import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Navbar from '../components/Navbar'
import Trivia from '../components/Trivia'

type Props = {}

export default class TriviaPage extends Component<Props> {

	render() {
		return (
			<View style={styles.container}>
				<Navbar />
				<Trivia labelName='הלכות ימים נוראים' />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E1DFDF',
		alignItems: 'center',
		justifyContent: 'center',
	}
})