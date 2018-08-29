import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

console.disableYellowBox = true
import Icon from 'react-native-vector-icons/Feather';
import {createBottomTabNavigator} from 'react-navigation';

class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>Testando...</Text>
      </View>
    );
  }
}

export default Navigator = createBottomTabNavigator({
  App
},{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="home" size={25} color={tintColor} />
    },
    tabBarOptions: {
      style: {
        backgroundColor: '#222'
      },
      activeTintColor: '#fff',
      inactiveTintColor: 'gray',
    }
  })
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
