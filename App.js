import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator} from 'react-navigation';

 export default class HomeScreen extends React.Component {
  render() {
    return (
      <RootStack/>,
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Details Page"
          onPress={()=> this.props.navigation.navigate('Details')}
          />
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

class DetailsScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  home: HomeScreen,
  Details: DetailsScreen,
  
},
{
  initialRouteName: 'Home',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
