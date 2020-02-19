import React from 'react';
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
import {color} from 'react-native-reanimated';

const contactLenses = [
  {
    img: require('../../assets/contact-lenses/Blink-N-Clean-Eye-Drops.png'),
    name: 'comfi Colors 1 Day',
    price: '£7.50',
  },
  {
    img: require('../../assets/contact-lenses/comfi-pure51042-132.png'),
    name: 'comfi Colors 1 Day',
    price: '£7.50',
  },
  {
    img: require('../../assets/contact-lenses/blink-n-clean-eye-drops788-131.png'),
    name: 'Blink-N-Clean Eye Drops',
    price: '£3.99',
    resizeMode:"contain"
  },
  {
    img: require('../../assets/contact-lenses/dailies-total-1786-131.png'),
    name: 'Dailies Total 1',
    price: '£3.99',
  },
  {
    img: require('../../assets/contact-lenses/comfi-all-in-one-solution-3-month788-131.png'),
    name: 'comfi All-in-One Solution Triple Pack',
    price: '£12.50',
    resizeMode:"contain"
  },
  {
    img: require('../../assets/contact-lenses/comfi-drops1061-137.png'),
    name: 'comfi Drops',
    price: '£3.75',
    resizeMode:"contain"
  },
  {
    img: require('../../assets/contact-lenses/Blink-N-Clean-Eye-Drops.png'),
    name: 'comfi Drops',
    price: '£3.75',
  },
  {
    img: require('../../assets/contact-lenses/comfi-pure51042-132.png'),
    name: 'comfi Drops',
    price: '£3.75',
  },
];

const OderContactLens = ({}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <AppLogo
          text1="Order contact lenses"
          style={{
            paddingTop: DeviceInfo.hp('6%'),
            paddingBottom: DeviceInfo.hp('4%'),
          }}
          textStyle={{color: COLOR.black}}
          logoBg={COLOR.blackBg}
        />
        <View style={styles.cardContaner}>
          <View style={styles.cardWrapper}>
            {contactLenses.map((list, i) => {
              return (
                <View style={styles.card}>
                  <View style={styles.imgViewWrapper}>
                    <View style={styles.imgView}>
                      <Image resizeMode={list.resizeMode} style={styles.img} source={list.img} />
                    </View>
                  </View>
                  <Text style={styles.name}>{list.name}</Text>
                  <Text style={styles.price}>{list.price}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OderContactLens;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: COLOR.blackBg,
  },
  cardWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: DeviceInfo.wp('80%'),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    borderWidth: 1.2,
    borderRadius: 10,
    borderColor: COLOR.yellow,
    width: '48.7%',
    height: DeviceInfo.hp('17.5%'),
    marginBottom:DeviceInfo.hp('1.1%'),
    paddingHorizontal:10
  },
  cardContaner: {
    alignItems: 'center',
    marginBottom:DeviceInfo.hp('7%')
  },
  imgView: {
      width:'88%',
      alignSelf:'center',
      height:DeviceInfo.hp('8.5%'),
    //   borderBottomWidth:2
  },
  img: {
    width: '100%',
    height: '100%',
  },
  imgViewWrapper:{
      borderBottomWidth:1.5,
      width:"100%",
      alignSelf:'center',
      paddingBottom:DeviceInfo.hp('1.2%'),
      marginBottom:DeviceInfo.hp('1.2%')
  },
  name:{
      fontFamily:"Poppins-Regular",
      fontSize:DeviceInfo.hp('1%')
  },
  price:{
      fontFamily:"Poppins-Bold",
      fontSize:DeviceInfo.hp('1.6%')
  }
});
