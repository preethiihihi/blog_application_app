/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  AppRegistry,
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
import Root from './navigators/Root';

function App(): JSX.Element {
  return (
   
       <AppNavigator/>
  
  );
}


export default App;
