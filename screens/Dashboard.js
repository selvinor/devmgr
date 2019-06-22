import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import plantLib from '../components/plant-list';


export default function Dashboard() {

  const AddPlantButton = (
    <Text onPress={handleAddPlantPress} style={styles.helpLinkText}>
      Add Plant +
    </Text>
  );

  return (
      <View style={StyleSheet.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.plantsContainer}>
            <AddPlantButton />
            <plantLib />            
          </View>

        </ScrollView>
      </View>
  );

}