import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Answer from './Answer'

type Props = {
	answers: string[]
}

export default function Answers({ answers }: Props) {
	return (
		<View style={styles.container}>
			{answers.map((answer => <Answer key={answer} answer={answer} />))}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flex: 4,
		justifyContent: 'flex-start',
	}
})