import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {PaperProvider} from 'react-native-paper';
// import crypto from 'crypto';
// import {Wallet} from 'ethers';
// import 'react-native-get-random-values';
// import '@ethersproject/shims';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray-100',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Prevent scrolling
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 200, // Adjust width and height as needed
    height: 200,
  },
  button: {
    marginTop: 20, // Adjust spacing as needed
    backgroundColor: 'slateblue', // Button background color
    padding: 10,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
  },
  buttonText: {
    color: 'white', // Button text color
    fontSize: 18,
  },
  textView: {
    marginTop: 20, // Adjust spacing as needed
    // backgroundColor: 'purple', // Button background color
    padding: 10,
    borderRadius: 5,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export const WalletGenerate = ({navigation}) => {
  // const [privateKey, setPrivateKey] = React.useState('');
  // const [address, setAddress] = React.useState('');

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('./assets/etp.png')} style={styles.logo} />
        </View>
        <Text style={styles.textView}>Generate New Ethereum Wallet </Text>

        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => navigation.navigate('Step2')}>
            Generate
          </Text>
        </TouchableOpacity>
      </View>
    </PaperProvider>
  );
};
