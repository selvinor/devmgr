import React from 'react';
import { connect } from 'react-redux';
import { FlatList, Button, Text, View, StyleSheet } from 'react-native';
import {  List, ListItem } from "react-native-elements";
import { fetchOrders } from '../actions';
class OrderList extends React.Component {

    componentDidMount() {
      this.props.dispatch(fetchOrders());
    }
  static navigationOptions = {
    title: 'OrderList',
  };
  render() {
    const { navigate } = this.props.navigation;
    console.log('this.props.orders', this.props.orders); 

    return (
      <View>
        <List>
        <FlatList
        data={this.props.orders}
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
            <Button title="New Order" onPress={() => navigate('OrderForm')}></Button>
          </View>
          <View style={{flex:1}} >
            <Button title="Home" onPress={() => navigate('Home')}></Button>
          </View>
        </View>        
      </View>
      
    );
  }
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

const mapStateToProps = state => { 
  return ({
    orders: state.order.orders
  });
}


export default connect(mapStateToProps)(OrderList);
