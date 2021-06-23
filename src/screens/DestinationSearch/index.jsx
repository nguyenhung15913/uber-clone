import React, { useState, useEffect } from 'react'
import { View, TextInput, SafeAreaView } from 'react-native'
import styles from './styles'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import PlaceRow from './PlaceRow'

export default function DestinationSearch() {
	const [originPlace, setOriginPlace] = useState(null)
	const [destinationPlace, setDestinationPlace] = useState(null)

	useEffect(() => {
		if (originPlace && destinationPlace) {
			console.warn('redirect to results')
		}
	}, [originPlace, destinationPlace])
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<GooglePlacesAutocomplete
					placeholder="Where from"
					onPress={(data, details = null) => {
						setOriginPlace({ data, details })
						console.log(data, details)
					}}
					suppressDefaultStyles
					currentLocation={true}
					currentLocationLabel="Current location"
					styles={{
						textInput: styles.textInput,
						container: {
							position: 'absolute',
							top: 50,
							left: 10,
							right: 10
						},
						listView: {
							position: 'absolute',
							top: 105
						},
						separator: {
							backgroundColor: '#efefef',
							height: 1
						}
					}}
					fetchDetails
					query={{
						key: 'AIzaSyCrN-l5N9HeuH4HqoCmBrO1PO48q5xL9Bw',
						language: 'en'
					}}
					renderRow={(data) => <PlaceRow data={data} />}
				/>

				<GooglePlacesAutocomplete
					placeholder="Where to?"
					onPress={(data, details = null) => {
						setDestinationPlace({ data, details })
						console.log(data, details)
					}}
					styles={{
						textInput: styles.textInput,
						container: {
							position: 'absolute',
							top: 100,
							left: 10,
							right: 10
						}
					}}
					suppressDefaultStyles
					fetchDetails
					query={{
						key: 'AIzaSyCrN-l5N9HeuH4HqoCmBrO1PO48q5xL9Bw',
						language: 'en'
					}}
					renderRow={(data) => <PlaceRow data={data} />}
				/>
			</View>
		</SafeAreaView>
	)
}
