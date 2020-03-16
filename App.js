/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Text
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
import LensesDetails from './src/screens/LensesDetails';
import Basket from './src/screens/Basket';
import RecentOrders from './src/screens/RecentOrders';
import ContactUs from './src/screens/ContactUs';
import Gallery from './src/screens/Gallery';
import SocilLogin from './src/screens/SocilaLogin';
import ProductCategory from './src/screens/ProductCategory';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Footer from './src/generic/Footer';
import AppLogo from './src/generic/AppLogo'
import DuplicateApplyForLc from './src/screens/DuplicateApplyForLc';

const ref = React.createRef();
const Stack = createStackNavigator();
const transparentBgScreens = []
const App= (props) => {
  
  return (
    <>
    <NavigationContainer
    ref={ref}>
      <Stack.Navigator
        initialRouteName="Welcome"
      >
        <Stack.Screen 
          name="ProductCategory" 
          component={ProductCategory}
          options={
            {headerShown:false}
          }
        />
        <Stack.Screen 
          name="SocilLogin" 
          component={SocilLogin}
          options={
            {headerShown:false}
          }
        />
        <Stack.Screen 
          name="Gallery" 
          component={Gallery}
          options={
            {headerShown:false}
          }
        />
        <Stack.Screen 
          name="ContactUs" 
          component={ContactUs}
          options={
            {headerShown:false}
          }
        />
        <Stack.Screen 
          name="RecentOrders" 
          component={RecentOrders}
          options={
            {headerShown:false}
          }
        />
        <Stack.Screen 
          name="Basket" 
          component={Basket}
          options={
            {headerShown:false}
          }
        />
        <Stack.Screen 
          name="LensesDetails" 
          component={LensesDetails}
          options={
            {headerShown:false}
          }
        />
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
          component={DuplicateApplyForLc}
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
    <Footer navigateRef={ref} />
    </>
  );
};

export default App;
