import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  PixelRatio,
} from 'react-native';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';
import AppLogo from '../generic/AppLogo';
import GenericButton from '../generic/GenericButton';
import MembershipCards from '../generic/MembershipCards';

const memberCards = [
  {
    img: require('../../assets/image_1.png'),
    item: 'flex-end',
    text: 'Up to 25% off all sunglass purchases.',
    bg: COLOR.lightYellow,
    mt: DeviceInfo.hp('9%'),
  },
  {
    img: require('../../assets/image_2.png'),
    item: 'flex-start',
    right: 0,
    text: 'Up to 20% off all spectacle purchases.',
    bg: COLOR.lightGreen,
    mt: DeviceInfo.hp('1.3%'),
  },
  {
    img: require('../../assets/image_3.png'),
    item: 'flex-end',
    text: '30% off all contact lens purchases.',
    bg: COLOR.lightYellow,
    mt: DeviceInfo.hp('1.3%'),
  },
];

const cards = [
  {
    title: 'Teal Card',
    description:
      'For as little as £9 per month you will receive the following benefits.',
    content: [
      '30% of all contact lens purchases',
      '15% off all spectacle purchases',
      '20% off sunglass purchases',
      'A free spectacle/contact lens appointment',
      'New product information and early bird launch invitations',
    ],
    bg: '#39565d',
    offer:"£9",
    screen:'OderContactLens'
  },
  {
    title: 'Black Card',
    description:
      'For as little as £15 per month you will receive the following benefits.',
    content: [
      '30% of all contact lens purchases',
      '20% off all spectacle purchases',
      '25% off sunglass purchases',
      'OCT scan (worth £30) included with a spectacle/contact lens appointment & follow up appointment.',
      'Priority appointments booking',
      'New product information and early bird launch invitations',
    ],
    bg: '#272727',
    style:{marginTop:DeviceInfo.hp("4.4%")},
    offer:"£15",
    screen:"BookAppointment"
  },
];

const MemberBenefits = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <AppLogo
          text1="Member benefits"
          style={{
            paddingTop: DeviceInfo.hp('7%'),
            paddingBottom: DeviceInfo.hp('4%'),
          }}
        />
        <Text style={styles.cardText}>
          The Scheme is designed as a thank you to our patients who have
          supported us in our aim to be best Independent Optician in London. The
          Scheme entitles you to a range of discounts and benefits that
          include…..
        </Text>
        <View style={styles.cardWrapper}>
          {memberCards.map(item => {
            return (
              <View style={[styles.cardView, {marginTop: item.mt}]}>
                <View style={[styles.offerWrapper, {right: item.right}]}>
                  <View style={[styles.offerView, {backgroundColor: item.bg}]}>
                    <Text style={styles.offerText}>{item.text}</Text>
                  </View>
                </View>
                <View style={[styles.imageView, {alignSelf: item.item}]}>
                  <Image style={styles.img} source={item.img} />
                </View>
              </View>
            );
          })}
        </View>
        <View style={styles.cardContainer}>
            {cards.map((item, i) => {
            return <MembershipCards
            onPress={()=>  navigation.navigate(item.screen)}
            item={item} key={i} />;
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default MemberBenefits;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.blackBg,
  },
  genericBtn: {
    marginTop: DeviceInfo.pixel(12),
    marginBottom: DeviceInfo.pixel(30),
  },
  cardText: {
    color: COLOR.white,
    fontFamily: 'Poppins-Regular',
    width: '75%',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: DeviceInfo.hp('1.9%'),
    // marginTop:DeviceInfo.pixel(20)
  },
  imageView: {
    width: '65%',
    height: DeviceInfo.hp('24%'),
  },
  img: {
    width: '100%',
    height: '100%',
  },
  cardWrapper: {
    width: '80%',
    alignSelf: 'center',
  },
  cardView: {
    // borderWidth:1,
    width: '100%',
    // justifyContent:"flex-end"
  },
  offerWrapper: {
    position: 'absolute',
    zIndex: 1000,
    height: '100%',
    width: '55%',
    // right:0,
    flexDirection: 'column',
    justifyContent: 'center',
    // borderWidth:1
  },
  offerView: {
    width: '100%',
    // alignSelf:"center",
    height: '80%',
    // backgroundColor:'rgba(212,156,57,.6)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  offerText: {
    color: COLOR.white,
    fontFamily: 'Raleway-Bold',
    width: '80%',
    // fontWeight:"bold",
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: DeviceInfo.pixel(7),
  },
  cardContainer:{
      marginVertical:DeviceInfo.hp('7%')
  }
});
