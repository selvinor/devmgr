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

export default function PlantCard() {

  return (
    <View style={StyleSheet.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.plantCard}>
          <PlantAvatar />
          <Text style={styles.plantTitle}><PlantTitle />
          </Text>
          <View style={styles.getStartedText}>
            <MonoText><PlantLatinName /></MonoText>
          </View>
          <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText>screens/HomeScreen.js</MonoText>
          </View>
        </View>
      </ScrollView>
    </View>
  );

}
function PlantAvatar() {

  return (
    <Image
    source={require('../assets/images/robot-dev.png')}
    style={styles.welcomeImage}
  />

  );
}
function PlantTitle() {
  const PlantName = 'Basil';
  return (
    <Text style={styles.developmentModeText}>
      {PlantName}
    </Text>
  );
}
function PlantLatinName() {
  const LatinName = 'Ocimum basilicum';
  return (
    <Text style={styles.developmentModeText}>
      {LatinName}
    </Text>
  );
}
