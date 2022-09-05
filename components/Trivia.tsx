import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Answers from './Answers';
import Label from './Label';
import Question from './Question';

type Props = {
	labelName: string;
}

export default function Home({ labelName }: Props) {
	return (
		<View style={styles.container}>
			<Label header text={labelName} />
			<Question question='אבי קם משנתו באשמורת הבוקר לקריאת הסליחות, מה הוא צריך לעשות קודם הסליחות?' />
			<Answers answers={['שום דבר', 'לקרוא תיקון חצות', 'לברך ברכות התורה וברכות השחר', 'לברך ברכות התורה']} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 8,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'flex-start',
	}
});