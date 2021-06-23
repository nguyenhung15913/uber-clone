import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
export default function HomeSearch() {
	return (
		<View>
			<View style={styles.inputBox}>
				<Text style={styles.inputText}>Where To</Text>
				<View style={styles.timeContainer}>
					<AntDesign name="clockcircle" size={16} />
					<Text>Now</Text>
					<MaterialIcons name="keyboard-arrow-down" size={16} />
				</View>
			</View>
			<View style={styles.row}>
				<View style={styles.iconContainer}>
					<AntDesign name="clockcircle" size={16} color="white" />
				</View>
				<Text style={styles.destinationText}>Spin Nightclub</Text>
			</View>
			<View style={styles.row}>
				<View style={styles.iconContainer}>
					<Entypo name="home" size={16} color="white" />
				</View>
				<Text style={styles.destinationText}>Home</Text>
			</View>
		</View>
	)
}
