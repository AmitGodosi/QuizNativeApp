import React from 'react'
import { FlatList, ScrollView, StyleSheet, View } from 'react-native'
import MenuItem from './MenuItem'

type Props = {
	menuItems: string[]
}

export default function Menu({ menuItems }: Props) {
	return (
		<View style={styles.container}>
			<FlatList alwaysBounceVertical={false} data={menuItems} renderItem={(item) => <MenuItem itemData={item} />} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 8,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	}
});