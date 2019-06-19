import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default function PlantList(props) {
  console.log('props: ', props);
	return (
		<View style={styles.listContainer}>
			<View>
				{/* {props.checked && <View style={styles.verticalLine} />} */}
				<Text style={styles.listItem}>{props.text}</Text>
			</View>
			<Icon
				name="plus"
				size={30}
				color="red"
				style={{ marginLeft: 'auto' }}
				onPress={props.addPlant}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	listContainer: {
		marginTop: '5%',
		flexDirection: 'row',
		borderColor: '#aaaaaa',
		borderBottomWidth: 1.5,
		width: '100%',
		alignItems: 'stretch',
		minHeight: 40
	},
	listItem: {
		paddingBottom: 20,
		paddingLeft: 10,
		marginTop: 6,
		borderColor: 'green',
		borderBottomWidth: 1,
		fontSize: 17,
		fontWeight: 'bold',
		color: 'black'
	},
	verticalLine: {
		borderBottomColor: 'green',
		borderBottomWidth: 4,
		marginLeft: 10,
		width: '100%',
		position: 'absolute',
		marginTop: 15,
		fontWeight: 'bold'
	}
});