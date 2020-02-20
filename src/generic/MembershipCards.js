import React from 'react';
import {Text, View, Image, StyleSheet, PixelRatio} from 'react-native';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';
import GenericButton from './/GenericButton';

const MembershipCards = ({item,onPress}) => {
  function checkIndexIsEven(n) {
    return n % 2 == 0;
  }
  return (
    <View style={[styles.container, {backgroundColor: item.bg, ...item.style}]}>
      {/* <View> */}
      <View style={styles.offerOverlay}>
        <Text style={styles.price}>{item.offer}</Text>
        <Text style={styles.perMonth}>Per Month</Text>
      </View>
      {/* </View> */}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.lineContainer}>
        <View style={styles.yellowLine} />
        <View style={styles.greenLine} />
        <View style={styles.yellowLine} />
      </View>
      {item.content.map((text, i) => {
        return (
          <Text
            style={[
              styles.content,
              {color: checkIndexIsEven(i) ? COLOR.yellow : COLOR.white},
            ]}>
            {text}
          </Text>
        );
      })}
      <GenericButton
        text="Apply"
        style={styles.genericBtn}
        textStyle={styles.btnTextStyle}
        onPress={onPress}
      />
    </View>
  );
};

export default MembershipCards;

const styles = StyleSheet.create({
  container: {
    width: '73%',
    borderWidth: 2,
    borderColor: COLOR.yellow,
    alignSelf: 'center',
    paddingHorizontal: 20,
    // padding:DeviceInfo.hp("1.5%")
  },
  title: {
    color: COLOR.white,
    fontFamily: 'Poppins-Medium',
    fontSize: DeviceInfo.hp('2.9%'),
    marginTop: DeviceInfo.hp('1.8%'),
    marginBottom: DeviceInfo.hp('1%'),
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
  description: {
    color: COLOR.white,
    fontFamily: 'Poppins-Regular',
    fontSize: DeviceInfo.hp('1.5%'),
  },
  content: {
    color: COLOR.white,
    fontSize: DeviceInfo.hp('1.3%'),
    fontFamily: 'Poppins-Regular',
  },
  lineContainer: {
    marginVertical: DeviceInfo.hp('1.3%'),
  },
  genericBtn: {
    marginVertical: DeviceInfo.hp('3.5%'),
  },
  btnTextStyle: {
    paddingVertical: DeviceInfo.hp('1.3%'),
  },
  offerOverlay: {
    position: 'absolute',
    backgroundColor: COLOR.yellow,
    borderRadius: DeviceInfo.wp('10%'),
    width: DeviceInfo.wp('18%'),
    height: DeviceInfo.wp('18%'),
    right: DeviceInfo.wp('5%'),
    top: -DeviceInfo.wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    fontFamily: 'Poppins-Bold',
    color: COLOR.white,
    fontSize: DeviceInfo.wp('4.7%'),
  },
  perMonth: {
    fontFamily: 'Poppins-Regular',
    color: COLOR.white,
    fontSize: DeviceInfo.wp('2%'),
    marginTop: -7,
  },
});
