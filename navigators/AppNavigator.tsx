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
import Root from './Root'


const AppNavigator=()=>{
     return(
          <>
          <Root/>
          </>
     )
}

export default AppNavigator;