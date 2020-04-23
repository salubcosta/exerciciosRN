import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import SimpleText from './components/SimpleText';
import ParImpar from './components/ParImpar';
import Contador from './components/Contador';
import Platform from './components/Platform';
import ListFlex from './components/ListFlex';


const App = () => {
  return (
    <>
      <View style={styles.container}>
        <SimpleText param="Texto por paramentro" />
        <ParImpar numero={22} />
        <Contador />
        <Platform />
        <ListFlex />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default App;
