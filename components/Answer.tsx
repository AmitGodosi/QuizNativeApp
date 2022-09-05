import React from 'react'
import { Button, Pressable, StyleSheet, Text, View } from 'react-native'

type Props = {
	answer: string;
}

export default function Answer({ answer }: Props) {
	const handleButtonClick = () => {
		console.log(answer);
	}
	return (
		<View style={styles.container}>
			<Pressable onPress={handleButtonClick}>
				<Text style={styles.text}>{answer}</Text>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		borderWidth: 2,
		borderColor: '#DDC9C9',
		margin: 12,
		padding: 24,
		borderRadius: 5,
		backgroundColor: '#E3D8D8'
	},
	text: {
		fontSize: 18,
		textAlign: 'center'
	}
})