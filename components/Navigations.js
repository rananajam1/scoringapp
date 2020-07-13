// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AlbumList from './AlbumList';
import Goals from './Goals';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Album Details"
        onPress={() => navigation.navigate('Album Details')}
      />
      <Text>
        {"\n"}
      </Text>
      <Button
        title="Go to Goals"
        onPress={() => navigation.navigate('Goals')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function Navigations() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Album Details" component={AlbumList} />
        <Stack.Screen name="Goals" component={Goals} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigations;