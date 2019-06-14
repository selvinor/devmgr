import React from 'react';
import { FlatList, Button, Text, View, StyleSheet } from 'react-native';
import {  List, ListItem } from "react-native-elements";

export default function PlantList () {

  return (
    <View>
      <List>
      <FlatList
      data={this.props.plants}
      renderItem={({ item }) => (
        <ListItem
          title={item.customerName}
          subtitle={item.email}
          phone={item.phone}
          description={item.description}
          message={item.message}
          price={item.price} 
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      </List>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex:1 , marginRight:10}} >
          <Button title="New Plant" onPress={() => navigate('PlantForm')}></Button>
        </View>
        <View style={{flex:1}} >
          <Button title="Home" onPress={() => navigate('Home')}></Button>
        </View>
      </View>        
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
