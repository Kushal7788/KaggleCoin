import React from 'react';

// Import the crypto getRandomValues shim (**BEFORE** the shims)
import 'react-native-get-random-values';

// Import the the ethers shims (**BEFORE** ethers)
import '@ethersproject/shims';

import {useColorScheme, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ReclaimKaggle} from '@reclaimprotocol/reclaim-react-native';
import {Card, Text, Button} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// const Dapp = async () => {
//   try {
//     const reclaimContract = new ethers.Contract(codecoinAddress, codecoinABI);
//     const id32bits = '0x' + Math.floor(Math.random() * 2 ** 32).toString(16);
//     await reclaimContract.createDapp(id32bits);
//     await reclaimContract.merkelizeUser(proof, dappId);
//   } catch (e) {
//     console.log(e);
//   }
// };

const ProofGenerate = ({navigation}): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const [proofGenerated, setProofGenerated] = React.useState(false);
  const [buttonLoading, setButtonLoading] = React.useState(false);
  const [proof, setProof] = React.useState({});

  const navigateNext = async () => {
    try {
      setButtonLoading(true);
      navigation.navigate('Step3');
    } catch (e) {
      console.log(e);
    }
  };

  const getProof = async proofVal => {
    try {
      console.log('proofVal', proofVal);
      setProof(proofVal);
      setProofGenerated(true);
    } catch (e) {
      console.log(e);
    }
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <View style={styles.container}>
      <Text style={{marginTop: '4%'}} variant="titleMedium">
        Generate Proof
      </Text>
      <SafeAreaView style={styles.container}>
        <ReclaimKaggle
          title="Kaggle Username"
          subTitle="Prove you own a Kaggle account"
          cta="Prove"
          onSuccess={proofs => {
            /*do something*/
            getProof(proofs);
            // console.log('proofs', proofs);
          }}
          onFail={e => {
            /*do something*/
            console.log('Error', e);
          }}
        />
      </SafeAreaView>
      {proofGenerated && (
        <Button
          buttonColor="slateblue"
          textColor="white"
          style={{marginTop: '3%', width: '25%'}}
          loading={buttonLoading}
          // contentStyle={{ flexDirection: 'row-reverse', justifyContent: 'center' }}
          onPress={navigateNext}>
          {buttonLoading ? null : 'Next'}
        </Button>
      )}
    </View>
  );
};

export default ProofGenerate;
