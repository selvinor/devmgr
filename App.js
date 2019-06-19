import React, { useState }  from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput,
	ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
//import PlantList from './AddAPlant';
// import PlantList from './AddAPlant';
const myPlants = require('./assets/plant-library/plants');
  // console.log('myPlants[0]: ', myPlants[0]);
export default function App() {
  const  [value, setValue] = useState('');
  const [seedPlants, setSeedPlants] = useState(myPlants);

  addPlant = () => {
    if (value.length > 0) {
      setSeedPlants([...seedPlants, { text: value, key: Date.now(), checked: false }]);
      setValue('');
    }
  };
  
  addPlantToCollection = id => {
  setSeedPlants(
    seedPlants.map(plant => {
      //console.log('Plant key: ', plant.key);
      if (plant.key === id) plant.checked = !plant.checked; 
      return plant;
    })
  );
};

  deletePlant = id => {
    setSeedPlants(
      seedPlants.filter(plant => {
        if (plant.key !== id) return true;
      })
    );
  };
  
  function ListPlants() {
    // const reptiles = ['alligator', 'snake', 'lizard'];
  
    return (
      <View>
        {seedPlants.map(plant => (
          <View key={plant.plant_name}><Text>{plant.plant_name}</Text></View>
        ))}
      </View>
    );
  }
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Plant List</Text>
      <ScrollView style={{ width: '100%' }}>
          <ListPlants />
      </ScrollView>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	header: {
		marginTop: '15%',
		fontSize: 20,
		color: 'red',
		paddingBottom: 10
	},
	textInputContainer: {
		flexDirection: 'row',
		alignItems: 'baseline',
		borderColor: 'black',
		borderBottomWidth: 1,
		paddingRight: 10,
		paddingBottom: 10
	},
	textInput: {
		flex: 1,
		height: 20,
		fontSize: 18,
		fontWeight: 'bold',
		color: 'black',
		paddingLeft: 10,
		minHeight: '3%'
	}
});