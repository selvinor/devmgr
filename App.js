import React, { useState, useEffect }  from 'react';
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
//import plantLib from './AddPlantToLib';
// import plantLib from './AddPlantToLib';
const plantLibrary = require('./assets/plant-library/plants');
  // console.log('plantLibrary[0]: ', plantLibrary[0]);
export default function App() {
  const  [value, setValue] = useState('');
  const  [currentKey, setCurrentKey] = useState(0);
  const [plantLib, setplantLib] = useState(plantLibrary);
  const [activePlants, setPlantsActive] = useState([]);

  addPlantToPlantLib = () => {
    console.log('add pressed');
    if (value.length > 0) {
      setplantLib([...plantLib, { text: value, key: Date.now(), checked: false }]);
      setValue('');
    }
  };
    useEffect(() => {
      addPlantToCollection = id => {
        //add plant to state

        console.log('addPlantToCollection pressed');
        console.log('id: ', id);
        console.log('activePlants before: ', activePlants);
        const plantToAdd = plantLib.filter(plant => plant._id == id)[0]; //plant.checked = !plant.checked; 
        if (activePlants.length > 0 ) {
          console.log('number of plants in collection: ', activePlants.length);
          const lastKey = activePlants[activePlants.length-1].key;
          console.log('last key: ', lastKey);
          plantToAdd.key = lastKey + 1;
          console.log('new key: ', plantToAdd.key);
        } else {
          plantToAdd.key = currentKey +1;
        }
        //console.log('plantToAdd: ', plantToAdd);  
        if (activePlants.length > 0) {
          setPlantsActive([...activePlants, plantToAdd]);    
        } else {
          setPlantsActive([plantToAdd]);
        } 
        setCurrentKey(plantToAdd.key);    
      };
    });

  deletePlant = id => {
    console.log('delete pressed for item: ', id);
    // setPlantsActive(
    //   activePlants.filter(plant => {
    //     if (plant.key !== id) return true;
    //   })
    // );
  };
  
  function ListPlants() {
  
    return (
      <View>
        {/* {activePlants.map(plant => (
          <View key={Date.now()}>
            <Text>{plant.plant_name}</Text>
            <Icon2
              name="trash-2"
              size={30}
              color="red"
              style={{ marginLeft: 'auto' }}
              onPress={deletePlant}
            />

          </View>
        ))}         */}
        {plantLib.map(plant => (
          <View key={plant.plant_name}>
            <Text>{plant.plant_name}</Text>
            <Icon
              name="plus-circle"
              size={30}
              color="blue"
              style={{ marginLeft: 'auto' }}
              onPress={() => addPlantToCollection(plant._id)}
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