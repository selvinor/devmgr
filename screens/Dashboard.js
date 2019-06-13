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
import PlantList from '../components/plant-list';


export default function Dashboard() {
  return (
      <View style={StyleSheet.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.plantsContainer}>
            <PlantList />            
          </View>

        </ScrollView>
      </View>
  );

}