import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default function UberTypeRow({ type }) {
	const getImage = () => {
		if (type.type === 'UberX') {
			return require('../../assets/images/UberX.jpeg')
		}

		if (type.type === 'Comfort') {
			return require('../../assets/images/123.jpeg')
		}

		if (type.type === 'UberXL') {
			return require('../../assets/images/UberXL.jpeg')
		}
	}
	return (
		<ScrollView>
			<View style={styles.container}>
				<Image style={styles.image} source={getImage()} />

				<View style={styles.middleContainer}>
					<Text style={styles.type}>
						{type.type} <Ionicons name="person" size={12} />3
					</Text>
					<Text style={styles.time}>8:03PM drop off</Text>
				</View>

				<View style={styles.rightContainer}>
					<Ionicons name="pricetag" size={18} color="#42d742" />
					<Text style={styles.price}>est. ${type.price}</Text>
				</View>
			</View>
		</ScrollView>
	)
}
