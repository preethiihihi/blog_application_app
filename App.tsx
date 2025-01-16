/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import AppNavigator from './navigators/AppNavigator';

function App(): JSX.Element {
  return (
    <SafeAreaView >
    <Text>hello i am going to be a good app</Text>
      <TouchableOpacity onPress={()=>{console.log("hello i came to screen")}}>
        <Text>click me </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}


export default App;
