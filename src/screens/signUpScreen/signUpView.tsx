import React, {useState, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const SignUp = ({navigation}:any) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <SafeAreaView
        style={{flex: 1,
         justifyContent: 'center',
          marginHorizontal: 10,
          overflow:"scroll"
          }}>
       <Text style={{color:"black"}}>I am signUp</Text>
       <View style={{ flexDirection:"row", marginVertical:"3%", justifyContent:'center'}}>
                 <Text style={{color:"black"}}> Go back to login </Text>
                 <TouchableOpacity onPress={() => {navigation.navigate("login")}}>
                   <Text style={{color:"grey"}}>Log In</Text>
                 </TouchableOpacity>
               </View>
      </SafeAreaView>
    </>
  );
};

export default SignUp;
