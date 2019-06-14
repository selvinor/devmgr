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
import PlantList from './AddAPlant';

export default function App() {
    const  [value, setValue] = useState('');
    const [plants, setPlants] = useState([]);
    addPlant = () => {
      if (value.length > 0) {
        setPlants([...plants, { text: value, key: Date.now(), checked: false }]);
        setValue('');
      }
    };
    
  checkPlant = id => {
    setPlants(
      plants.map(plant => {
        console.log('Plant key: ', plant.key, ' | Plant checked: ', plant.checked);
        if (plant.key === id) plant.checked = !plant.checked;
        return plant;
      })
    );
  };

  deletePlant = id => {
    setPlants(
      plants.filter(plant => {
        if (plant.key !== id) return true;
      })
    );
  };
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Plant List</Text>
			<View style={styles.textInputContainer}>
				<TextInput
					style={styles.textInput}
					multiline={true}
					placeholder="What do you want to do today?"
          placeholderTextColor="#abbabb"
          value={value}
					onChangeText={value => {setValue(value);console.log('set value: ', value)}}
				/>
        <TouchableOpacity onPress={() => addPlant()}>
            <Icon name="plus" size={30} color="blue" style={{ marginLeft:15 }} />
        </TouchableOpacity>
			</View>
      <ScrollView style={{ width: '100%' }}>
        {plants.map(item => (
          <PlantList
            text={item.text}
            key={item.key}
            checked={item.checked}
            setChecked={() => checkPlant(item.key)}
            deletePlant={() => deletePlant(item.key)}
          />
          ))}
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