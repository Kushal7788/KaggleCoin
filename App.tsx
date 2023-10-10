import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { WalletGenerate } from './src/WalletGenerate';
import ProofGenerate from './src/KaggleProof';
import ViewBalance from './src/Balance';
import LoadingScreen from './src/LoadingScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Step1">
        <Stack.Screen name="Step1" component={WalletGenerate} />
        <Stack.Screen name="Step2" component={ProofGenerate} />
        <Stack.Screen name="Step3" component={ViewBalance} />
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
