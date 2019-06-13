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
const PlantLibrary = require('../assets/plant-library/plants');

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
          <View style={styles.plantSelectContainer}>            
            <PlantList />            
          </View>

        </ScrollView>
      </View>
  );

}
function PlantList() {

  const plantList = 
  return (
    <Text style={styles.developmentModeText}>
      Development mode is enabled: your app will be slower but you can use
      useful development tools. {learnMoreButton}
    </Text>
  );
}

function handleAddPlantPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}