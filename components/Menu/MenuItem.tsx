import React from 'react'
import { ListRenderItemInfo, Pressable, StyleSheet, Text, View } from 'react-native';
import { LabelColor } from '../../SASS/colors';

type Props = {
	itemData: ListRenderItemInfo<string>;
}

export default function MenuItem({ itemData }: Props) {
	const onMenuItemClickHandler = () => {
		console.log(itemData?.item);
	}
	return (
		<Pressable onPress={onMenuItemClickHandler}>
			<View style={styles.container}>
				<Text style={styles.text}>{itemData?.item}</Text>
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: LabelColor,
		padding: 20,
		marginVertical: 10,
		width: '100%',
		borderRadius: 10,
		borderWidth: 3,
		borderColor: '#D3CCBF'
	},
	text: {
		fontSize: 18,
		textAlign: 'center'

	}
})