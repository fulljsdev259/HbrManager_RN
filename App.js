/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';
import Welcome from './src/screens/Welcome';
import SignIn from './src/screens/Signin';
import Profile from './src/screens/Profile';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Footer from './src/generic/Footer';

const ref = React.createRef();
const Stack = createStackNavigator();
const App= () => {
  return (
    <>
    <NavigationContainer ref={ref}>
      <Stack.Navigator
        initialRouteName="Welcome"
      >
        <Stack.Screen 
          name="Profile" 
          component={Profile}
          options={
            {headerShown:false}
          }
        />
        <Stack.Screen 
          name="SignIn" 
          component={SignIn}
          options={
            {headerShown:false}
          }
        />
        <Stack.Screen 
          name="Welcome" 
          component={Welcome}
          options={
            {headerShown:false}
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
    <Footer/>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
