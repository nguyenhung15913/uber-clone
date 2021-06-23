import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
	inputBox: {
		backgroundColor: '#d9d9d9',
		margin: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 10
	},
	inputText: {
		fontSize: 20,
		fontWeight: '600',
		color: '#6e6e6e'
	},
	timeContainer: {
		flexDirection: 'row',
		width: 100,
		justifyContent: 'space-between',
		backgroundColor: '#fff',
		padding: 10,
		alignItems: 'center',
		borderRadius: 100
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 20,
		borderBottomWidth: 1,
		borderColor: '#dbdbdb'
	},
	iconContainer: {
		backgroundColor: '#b3b3b3',
		padding: 10,
		borderRadius: 25
	},
	destinationText: {
		marginLeft: 10,
		fontWeight: '500',
		fontSize: 16
	}
})

export default styles
