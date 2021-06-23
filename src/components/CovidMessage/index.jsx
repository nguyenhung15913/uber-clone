import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
export default function CovidMessage() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Travel only if necessary</Text>
			<Text style={styles.text}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
				magni culpa itaque similique doloribus impedit. Quod nulla laboriosam
				amet perspiciatis.
			</Text>
			<Text style={styles.learnMore}>Learn More</Text>
		</View>
	)
}
