import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';

const ViewBalance = ({navigation}) => {
  return (
    <ImageBackground
      source={require('./assets/kagxeth.jpeg')}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Dashboard</Text>
    </ImageBackground>
  );
};

export default ViewBalance;
