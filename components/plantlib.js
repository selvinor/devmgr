import React, { useState, useEffect }  from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const plantLibrary = require('../assets/plant-library/plants.json');

export default function Plantlib() {
  const [currentKey, setCurrentKey] = useState(0);
  const [plantLib, setplantLib] = useState(plantLibrary);
  const [activePlants, setPlantsActive] = useState([]);
  
  useEffect(() => {
    console.log('I will run after each render');
    addPlantToCollection = id => {

      const plantToAdd = plantLib.filter(plant => plant._id == id)[0]; 
      if (activePlants.length > 0) {
        const lastKey = activePlants[activePlants.length - 1].key;
        plantToAdd.key = lastKey + 1;
      } else {
        plantToAdd.key = currentKey + 1;
      }
      if (plantToAdd.count) {
        plantToAdd.count++;
      } else {
        plantToAdd.count = 1;
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

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select your plant</Text>
      <ScrollView style={{ width: '100%' }}>
        {plantLib.map(plant => (
          <View key={plant.plant_name} style={styles.textInputContainer}>
            <Text>{plant.plant_name}</Text>
            <Text>{(plant.count > 0) ? ' (' + plant.count + ')':' '}</Text>
            <Icon
              name="plus-circle"
              size={30}
              color="blue"
              style={{ marginLeft: 'auto' }}
              onPress={() => addPlantToCollection(plant._id)}
            />
          </View>
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
    backgroundColor: '#F5FCFF',
    width:'100%'
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
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  textInput: {
    flex: 1,
    height: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    // paddingLeft: 10,
    minHeight: '3%'
  }
});