import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import {
	StyleSheet,
	Text,
	View,
	PermissionsAndroid,
	Platform
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import DestinationSearch from './src/screens/DestinationSearch'

import SearchResults from './src/screens/SearchResults'

import HomeScreen from './src/screens/HomeScreen'

import Geolocation from '@react-native-community/geolocation'

Geolocation.setRNConfiguration(config)

navigator.geolocation = require('@react-native-community/geolocation')

export default function App() {
	const androidPermissions = async () => {
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
				{
					title: 'Uber App Location Permission',
					message:
						'Uber App needs access to your location ' +
						'so you can take awesome pictures.',
					buttonNeutral: 'Ask Me Later',
					buttonNegative: 'Cancel',
					buttonPositive: 'OK'
				}
			)
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				console.log('You can use the camera')
			} else {
				console.log('Camera permission denied')
			}
		} catch (err) {
			console.warn(err)
		}
	}

	useEffect(() => {
		Geolocation.getCurrentPosition((info) => console.log(info))
	}, [])

	useEffect(() => {
		if (Platform.OS === 'android') {
			androidPermissions()
		} else {
			Geolocation.requestAuthorization()
		}
	}, [])

	return (
		<View style={styles.container}>
			<DestinationSearch />
			<StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff'
	}
})
