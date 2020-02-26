import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  PixelRatio,
  ScrollView,
} from 'react-native';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';
import AppLogo from '../generic/AppLogo';
import GenericTextInput from '../generic/GenericTextInput';
import GenericButton from '../generic/GenericButton';

const SocilLogin = ({navigation, route}) => {
  const isFbLogin =
    route.params &&
    route.params &&
    route.params.socialLogin &&
    route.params.socialLogin === 'fb';
  return (
    <View>
      <ImageBackground
        resizeMode="cover"
        style={styles.bgImg}
        source={require('../../assets/SIGN_INTO_ACCOUNT.png')}>
        <View style={styles.overlay}>
          <ScrollView>
            <AppLogo
              text1={isFbLogin ? 'Facebook sign in' : 'Google sign in'}
              style={{
                paddingTop: DeviceInfo.hp('2.5%'),
                paddingBottom: DeviceInfo.hp('2.5%'),
              }}
              isSocial={isFbLogin ? 'fb' : 'google'}
            />
            <View style={styles.wrapper}>
              <GenericTextInput placeholder="Email Address" />
              <GenericButton
                text="Sign in"
                style={styles.genericBtn}
                onPress={() =>
                  navigation.navigate('Profile')
                }
              />
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SocilLogin;

const styles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    backgroundColor: COLOR.overlay,
    flex: 1,
  },
  wrapper: {
    // width:"100%",
    // fle
    // alignSelf:'center'
  },
  genericBtn: {
    marginTop: DeviceInfo.hp('1.6%'),
  },
});
