import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { MENU_ITEMS } from '../components/Menu/consts'
import Menu from '../components/Menu/Menu'
import Navbar from '../components/Navbar'

type Props = {}

export default class MenuPage extends Component<Props> {

	render() {
		return (
			<View style={styles.container}>
				<Navbar />
				<Menu menuItems={MENU_ITEMS} />
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