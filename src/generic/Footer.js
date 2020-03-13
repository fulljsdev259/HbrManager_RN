import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform
} from 'react-native';
import AppLogo from '../generic/AppLogo';
import COLOR from '../utiles/color';
import Icon from 'react-native-vector-icons/AntDesign';
import DeviceInfo from '../utiles/deviceInfo';

const Footer = ({navigateRef}) => {
  function handleNavigate(navigateTo) {
    if (navigateRef && navigateRef.current) {
      navigateRef.current.navigate(navigateTo);
    }
  }

  return (
    <View style={[Platform.OS ==='ios' ? {} : {paddingVertical:15},  styles.footer]}>
      <TouchableOpacity
        onPress={() => handleNavigate('Welcome')}
        activeOpacity={0.5}>
        <View style={[Platform.OS ==='ios' ? styles.iconWrapper : {}]}>
          <View style={styles.imgView}>
            <Image
              resizeMode="contain"
              style={styles.img}
              source={require('../../assets/footer/Group_38.png')}
            />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleNavigate('Profile')}
        activeOpacity={0.5}>
        <View style={[Platform.OS ==='ios' ? styles.iconWrapper : {}]}>
          <View style={styles.imgView}>
            <Image
              resizeMode="contain"
              style={styles.img}
              source={require('../../assets/footer/Group_35.png')}
            />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleNavigate('ContactUs')}
        activeOpacity={0.5}>
        <View style={[Platform.OS ==='ios' ? styles.iconWrapper : {}]}>
          <View style={styles.imgView}>
            <Image
              resizeMode="contain"
              style={styles.img}
              source={require('../../assets/footer/Group_36.png')}
            />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleNavigate('OderContactLens')}
        activeOpacity={0.5}>
        <View style={[Platform.OS ==='ios' ? styles.iconWrapper : {}]}>
          <View style={styles.imgView}>
            <Image
              resizeMode="contain"
              style={styles.img}
              source={require('../../assets/footer/Group_67.png')}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  imgView: {
    width: DeviceInfo.wp('7%'),
    height: DeviceInfo.wp('7%'),
  },
  img: {
    width: '100%',
    height: '100%',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: COLOR.darkGreen,
  },
  iconWrapper: {
    // borderWidth:1,
    width: DeviceInfo.wp('15%'),
    height: DeviceInfo.wp('14%'),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
