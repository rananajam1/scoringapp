import React, { useState } from 'react';
import Header from './Header'
import { View } from 'react-native';
import StartGameScreen from './StartGameScreen';
import GameScreen from './GameScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const AppGame= () => {
  const [userNumber, setUserNumber] = useState()

  const startGameHandler = (selectedNumber)=>{
    setUserNumber(selectedNumber)
  }

  let screen = <StartGameScreen onStartGame={startGameHandler} />

  if(userNumber){
    screen = <GameScreen userChoice={userNumber}/>
  }

  return (
    <View>
      <Header headerText="Guess Number Game"/>
      {screen}
    </View>
  );
};

export default AppGame;
