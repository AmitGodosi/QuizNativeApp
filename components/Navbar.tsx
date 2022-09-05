import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import { NavbarBackground } from '../SASS/colors';

export default function Navbar() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>טרוויה הלכות - ילקוט יוסף</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		backgroundColor: NavbarBackground,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize: 18,
		marginTop: 30
	}
});