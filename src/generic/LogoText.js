import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Animated,
  PanResponder,
  Platform,
} from 'react-native';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';

const LogoText = ({
  text1,
  text2,
  style,
  textStyle,
  shop,
  logoBg,
  handleText,
  isSocial,
}) => {
  const shopNowText = '<< Shop';
  const isFromFb = isSocial && isSocial === 'fb' ? true : false;
  console.log(StatusBar.currentHeight, 'android');
  return (
    <View style={styles.container}>
      {shop && (
        <View style={styles.shopTextView}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              handleText ? handleText() : null;
            }}>
            <Text style={styles.shopText}>{shopNowText}</Text>
          </TouchableOpacity>
        </View>
      )}
      <View>
        {isSocial && (
          <View style={styles.socialBg}>
            <Image
              style={styles.socialImg}
              source={
                isFromFb
                  ? require('../../assets/facebook-icon.png')
                  : require('../../assets/google.png')
              }
            />
          </View>
        )}
      </View>
      {(text1 || text2) && (
        <View style={[style ? {...style} : styles.textContainer]}>
          {text1 && <Text style={[styles.text, {...textStyle}]}>{text1}</Text>}
          {text2 && (
            <Text style={[styles.text, {marginTop: -5}, , {...textStyle}]}>
              {text2}
            </Text>
          )}
        </View>
      )}
    </View>
  );
};

export default LogoText;

const styles = StyleSheet.create({
  container: {},
  notchDetectorView: {
    paddingTop:
      DeviceInfo.deviceDeepInfo.hasNotch() && Platform.OS === 'ios'
        ? DeviceInfo.hp('3.7%')
        : 0,
  },
  applogo: {
    // marginTop:20,
    width: '100%',
    height: '100%',
  },
  applogoWrapper: {
    width: DeviceInfo.wp('45%'),
    height: DeviceInfo.hp('10%'),
  },
  applogoView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 25,
    paddingBottom: 20,
  },
  yellowLine: {
    height: 1.2,
    width: '100%',
    backgroundColor: COLOR.yellow,
    marginTop: 2,
  },
  greenLine: {
    height: 1.2,
    width: '100%',
    backgroundColor: COLOR.darkGreen,
    marginTop: 2,
  },
  textContainer: {
    paddingVertical: DeviceInfo.hp('3.6%'),
  },
  text: {
    color: COLOR.white,
    textAlign: 'center',
    fontSize: DeviceInfo.hp('2.1%'),
    fontFamily: 'Poppins-Medium',
  },
  shopText: {
    fontFamily: 'Poppins-Regular',
    fontSize: DeviceInfo.hp('1.2%'),
    width: '80%',
  },
  shopTextView: {
    width: '90%',
    alignSelf: 'center',
    paddingTop: DeviceInfo.hp('1.3%'),
  },
  socialBg: {
    width: DeviceInfo.width * 0.125,
    height: DeviceInfo.width * 0.125,
    backgroundColor: COLOR.white,
    borderRadius: (DeviceInfo.width * 0.2) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: DeviceInfo.hp('5%'),
  },
  socialImg: {
    width: 23,
    height: 23,
  },
});
