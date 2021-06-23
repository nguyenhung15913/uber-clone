import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { Image, StyleSheet, FlatList, View, Dimensions } from 'react-native'
import cars from '../../assets/data/cars'
export default function HomeMap() {
	const getImage = (type) => {
		if (type === 'UberX') {
			return require('../../assets/images/top-UberX.png')
		}

		if (type === 'Comfort') {
			return require('../../assets/images/top-Comfort.png')
		}

		if (type === 'UberXL') {
			return require('../../assets/images/top-UberXL.png')
		}
	}
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
				{cars.map((car) => (
					<Marker
						key={car.id}
						coordinate={{
							latitude: car.latitude,
							longitude: car.longitude
						}}
					>
						<Image
							style={{
								width: 70,
								height: 70,
								resizeMode: 'contain',
								transform: [
									{
										rotate: `${car.heading}deg`
									}
								]
							}}
							source={getImage(car.type)}
						/>
					</Marker>
				))}
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
