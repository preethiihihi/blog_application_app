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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../src/screens/login';
import SignUp from '../src/screens/signUpScreen/signUpView';

const Stack=createStackNavigator()


const Root=()=>{
     
     return(
          <NavigationContainer>
               <Stack.Navigator initialRouteName='login'>
                    <Stack.Screen name="login" component={Login}/>
                    <Stack.Screen name="signUp" component={SignUp}/>
               </Stack.Navigator>
          </NavigationContainer>
     )
}

export default Root;