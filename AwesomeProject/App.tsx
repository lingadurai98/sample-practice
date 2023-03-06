/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native/types';


function App(): JSX.Element {
 
  return (
    <SafeAreaView style={styles.backgroundStyle}>
          <View style={styles.text}>
            Hello !
          </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle:{
    backgroundColor : 'grey'
  },
  text:{
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
