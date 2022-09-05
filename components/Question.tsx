import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {
	question: string;
}

export default function Question({ question }: Props) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{question}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 12,
		flex: 1
	},
	text: {
		fontSize: 24,
		textAlign: 'center'
	}
})