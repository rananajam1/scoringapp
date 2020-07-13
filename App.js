// In App.js in a new project

import * as React from 'react';
import {Provider} from 'react-redux';
import getTheme from './native-base-theme/components';
import variables from './native-base-theme/variables/material';
import {StyleProvider} from 'native-base';
import store from './redux/js/store/index';
import Routes from './Routes';
import LoadingScreen from './src/screens/LoadingScreen';
import {View} from 'react-native';

function App() {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <LoadingScreen />
        <StyleProvider style={getTheme(variables)}>
            <Routes />
        </StyleProvider>
      </View>
    </Provider>
  );
}

export default App;
