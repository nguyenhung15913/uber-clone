import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet, View } from 'react-native'

import MapViewDirections from 'react-native-maps-directions'

const GOOGLE_MAPS_APIKEY = 'AIzaSyCrN-l5N9HeuH4HqoCmBrO1PO48q5xL9Bw'
export default function RouteMap() {
	const origin = { latitude: 28.450627, longitude: -16.263045 }
	const destination = { latitude: 28.460127, longitude: -16.269045 }
	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: 28.450627,
					longitude: -16.263045,
					latitudeDelta: 0.0222,
					longitudeDelta: 0.0121
				}}
			>
				<MapViewDirections
					origin={origin}
					destination={destination}
					apikey={GOOGLE_MAPS_APIKEY}
					strokeWidth={5}
					strokeColor="black"
				/>
				<Marker coordinate={origin} title="Origin" />
				<Marker coordinate={destination} title="Destination" />
			</MapView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff'
	},
	map: {
		width: '100%',
		height: 350
	}
})
