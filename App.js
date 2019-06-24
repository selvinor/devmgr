import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon2 from 'react-native-vector-icons/Feather';
// import ListPlants from './components/plant-list';
import Plantlib from './components/plantlib';
import HomeScreen from './screens/HomeScreen';

// const plantLibrary = require('./assets/plant-library/plants');

export default function App() {
  const [value, setValue] = useState('');
//  const [currentKey, setCurrentKey] = useState(0);
//  const [plantLib, setplantLib] = useState(plantLibrary);
//  const [activePlants, setPlantsActive] = useState([]);
 
  // With empty array run after each render
  useEffect(() => {
    console.log('I will run after each render');
    // deletePlant = id => {
    //   setPlantsActive(
    //     activePlants.filter(plant => {
    //       if (plant.key !== id) return true;
    //     })
    //   );
    // };
    // addPlantToCollection = id => {

    //   const plantToAdd = plantLib.filter(plant => plant._id == id)[0]; //plant.checked = !plant.checked; 
    //   if (activePlants.length > 0) {
    //     const lastKey = activePlants[activePlants.length - 1].key;
    //     plantToAdd.key = lastKey + 1;
    //   } else {
    //     plantToAdd.key = currentKey + 1;
    //   }
    //   //console.log('plantToAdd: ', plantToAdd);  
    //   if (activePlants.length > 0) {
    //     setPlantsActive([...activePlants, plantToAdd]);
    //   } else {
    //     setPlantsActive([plantToAdd]);
    //   }
    //   setCurrentKey(plantToAdd.key);
    // };

    // addPlantToPlantLib = () => {
    //   console.log('add pressed');
    //   if (value.length > 0) {
    //     setplantLib([...plantLib, { text: value, key: Date.now(), checked: false }]);
    //     setValue('');
    //   }
    // };
  
  });

  // With empty array run only once
  useEffect(() => {
    console.log('I will run only once');
  }, []);

  // function ListPlants() {
  //   return (
  //     <View>
  //      <Text style={styles.header}>My Plants</Text>
  //      <ScrollView style={{ width: '100%' }}>
  //       {activePlants.map((plant, index) => (
  //         <View key={index} style={styles.textInputContainer}>
  //           <Text
  //             style={{ margin: 'auto' }}
  //           >{plant.plant_name}</Text>
  //           <Icon2
  //             name="trash-2"
  //             size={30}
  //             color="red"
  //             style={{ marginLeft: 'auto' }}
  //             onPress={() => deletePlant(plant.key)}
  //           />
  //         </View>
  //       ))}
  //       </ScrollView>
  //       <ScrollView style={{ width: '100%' }}>
  //       <Text style={styles.header}>Plant Library</Text>
  //       {plantLib.map(plant => (
  //         <View key={plant.plant_name} style={styles.textInputContainer}>

  //           <Text>{plant.plant_name}</Text>
  //           <Icon
  //             name="plus-circle"
  //             size={30}
  //             color="blue"
  //             style={{ marginLeft: 'auto' }}
  //             onPress={() => addPlantToCollection(plant._id)}
  //           />
  //         </View>
  //       ))}
  //       </ScrollView>
  //     </View>
  //   );
  // }
  return (
    <View style={styles.container}>
        <HomeScreen />   
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
    paddingLeft: 10,
    minHeight: '3%'
  }
});