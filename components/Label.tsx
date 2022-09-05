import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LabelColor } from '../SASS/colors'

type Props = {
	text: string
	header?: boolean;
}

export default function Label({ text, header }: Props) {
	const labelStyles = header ? [styles.title, styles.header] : [styles.title]
	return (
		<View style={labelStyles}>
			<Text style={styles.text}>{text}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		backgroundColor: LabelColor,
		paddingVertical: 12,
		paddingHorizontal: 36,
		borderRadius: 5,
	},
	header: {
		margin: 24
	},
	text: {
		color: 'white',
		fontSize: 20,
	}
});