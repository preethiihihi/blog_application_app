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

const Login = ({navigation}:any) => {
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
        <View style={{alignItems: 'center', marginBottom: '10%'}}>
          <Text style={{color: 'black'}}>hello i am login yeah heee</Text>
        </View>
        <View>
          <Text style={{color: 'black'}}>UserName</Text>
          <TextInput
            style={{backgroundColor: 'grey', borderRadius: 7}}
            placeholder="Enter UserName"
            value={userName}
            onChangeText={text => {
              setUserName(text);
            }}
          />
        </View>
        <View>
          <Text style={{color: 'black'}}>Password</Text>
          <TextInput
            style={{backgroundColor: 'grey', borderRadius: 7}}
            placeholder="enter password"
            value={password}
            onChangeText={text => {
              setPassword(text);
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: 'lightblue',
            marginTop: '5%',
            height: '5%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius:7
          }}>
          <TouchableOpacity onPress={() => {navigation.navigate("signUp")}}>
            <Text style={{color: 'black'}}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection:"row", marginVertical:"3%", justifyContent:'center'}}>
          <Text style={{color:"black"}}>Dont have an  account?? </Text>
          <TouchableOpacity onPress={() => {navigation.replace("signUp")}}>
            <Text style={{color:"grey"}}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;
