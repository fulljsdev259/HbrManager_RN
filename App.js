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
import ApplyOrSignin from './src/screens/ApplyOrSignin';
import Profile from './src/screens/Profile';
import SignIn from './src/screens/SignIn';
import ApplyForLc from './src/screens/ApplyForLc';
import AppLoyaltyCard from './src/screens/AppLoyaltyCard';
import MemberBenefits from './src/screens/MenberBenefits';
import OderContactLens from './src/screens/OderContactLens';
import BookAppointment from './src/screens/BookAppointment';
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
        initialRouteName="BookAppointment"
      >
        <Stack.Screen 
          name="BookAppointment" 
          component={BookAppointment}
          options={
            {headerShown:false}
          }
        />
        <Stack.Screen 
          name="OderContactLens" 
          component={OderContactLens}
          options={
            {headerShown:false}
          }
        />
        <Stack.Screen 
          name="MemberBenefits" 
          component={MemberBenefits}
          options={
            {headerShown:false}
          }
        />
        <Stack.Screen 
          name="AppLoyaltyCard" 
          component={AppLoyaltyCard}
          options={
            {headerShown:false}
          }
        />
        <Stack.Screen 
          name="ApplyForLc" 
          component={ApplyForLc}
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
          name="Profile" 
          component={Profile}
          options={
            {headerShown:false}
          }
        />
        <Stack.Screen 
          name="ApplyOrSignin" 
          component={ApplyOrSignin}
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
