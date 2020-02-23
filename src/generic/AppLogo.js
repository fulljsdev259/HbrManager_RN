import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';

const AppLogo = ({
  text1,
  text2,
  style,
  textStyle,
  shop,
  logoBg,
  handleText,
}) => {
  const shopNowText = '<< Shop';
  return (
    <View>
      <View style={{backgroundColor: logoBg}}>
        <View style={styles.applogoView}>
          <View style={styles.applogoWrapper}>
            <Image
              style={styles.applogo}
              resizeMode="contain"
              source={require('../../assets/applogo.png')}
            />
          </View>
        </View>
        <View>
          <View style={styles.yellowLine} />
          <View style={styles.greenLine} />
          <View style={styles.yellowLine} />
        </View>
      </View>
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

export default AppLogo;

const styles = StyleSheet.create({
  applogo: {
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
});
