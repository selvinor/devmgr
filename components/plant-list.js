import React, { useState, useEffect }  from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

export default function PlantCollection () {
  const [activePlants, setPlantsActive] = useState([]);
  function ListCollection() {
    let counter = 0;
    return (
      <View>
        { activePlants.map(plant => (
          <View key={counter++}>
            <Text>{plant.plant_name}</Text>
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
  deletePlant = id => {
    console.log('delete pressed for item: ', id);
    setPlantsActive(
      activePlants.filter(plant => {
        if (plant.key !== id) return true;
      })
    );
  };
	return (
		<View style={styles.container}>
			<Text style={styles.header}>My Collection</Text>
      <ScrollView style={{ width: '100%' }}>
          <ListCollection />
      </ScrollView>

		</View>
	);
}

const styles = StyleSheet.create({  
  button: {
    width: 10,
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},

  title: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#d1ea09',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    padding: 40,
  }
});
