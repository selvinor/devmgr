import React, { useState }  from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput,
	ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Feather';
//import PlantList from './AddAPlant';
// import PlantList from './AddAPlant';
const plantLibrary = require('./assets/plant-library/plants');
  // console.log('plantLibrary[0]: ', plantLibrary[0]);
export default function App() {
  const  [value, setValue] = useState('');
  const [seedPlants, setSeedPlants] = useState(plantLibrary);

  addPlant = () => {
    console.log('add pressed');
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
    console.log('delete pressed');
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
          <View key={plant.plant_name}>
            <Text>{plant.plant_name}</Text>
            <Icon
              name="plus-circle"
              size={30}
              color="blue"
              style={{ marginLeft: 'auto' }}
              onPress={addPlant}
            />
            <Icon2
              name="trash-2"
              size={30}
              color="red"
              style={{ marginLeft: 'auto' }}
              onPress={deletePlant}
            />

          </View>
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