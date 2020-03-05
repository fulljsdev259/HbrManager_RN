import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  PixelRatio,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from 'react-native';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';
import AppLogo from '../generic/AppLogo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GalleryImages from '../generic/GalleryImages';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const Gallery = ({text1, text2, style}) => {
  const [tabs, setTabs] = useState('grid');
  const PLATFORMCOLOR = Platform.OS === 'ios' ? '#000' : '#fff';
  return (
    <View style={styles.container}>
      <AppLogo logoBg={COLOR.blackBg} />
      <ScrollView>
        
        <View style={styles.contentWrapper}>
          <View style={[styles.wrapper, {backgroundColor: PLATFORMCOLOR}]}>
            <View style={styles.headerView}>
              <View style={styles.imgView}>
                <Image
                  style={styles.img}
                  source={require('../../assets/profile.png')}
                />
              </View>
              <View style={styles.galleryInfoWrapper}>
                <View style={styles.infoView}>
                  <View style={styles.socialInfoView}>
                    <Text style={styles.designation}>76</Text>
                    <Text style={styles.infoType}>Posts</Text>
                  </View>
                  <View style={styles.socialInfoView}>
                    <Text style={styles.designation}>133</Text>
                    <Text style={styles.infoType}>Followers</Text>
                  </View>
                  <View style={styles.socialInfoView}>
                    <Text style={styles.designation}>122</Text>
                    <Text style={styles.infoType}>Following</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.socialInfoWrapper}>
              <Text style={styles.designationName}>
                Hodd Barnes & D Masons Ave
              </Text>
              <Text style={styles.medicalHealthName}>Medical & Health</Text>
              <Text style={styles.linkText}>www.hoddbarnesdickins.com</Text>
              <Text style={styles.medicalHealth}>
                11 masons ave, London, United Kingdom
              </Text>
              <Text style={styles.medicalHealth}>
                Followed by i_am_raquel_, catjohnson3 and 7 others
              </Text>
            </View>
            <View style={styles.recordWrapper}>
              <View style={[styles.instafollowing, styles.followBg]}>
                <TouchableOpacity activeOpacity={0.5}>
                  <Text style={[styles.instaText, styles.followText]}>
                    Follow
                  </Text>
                </TouchableOpacity>
                <Entypo
                  name="chevron-small-down"
                  color={COLOR.white}
                  size={20}
                />
              </View>
              <View style={styles.instafollowing}>
                <TouchableOpacity activeOpacity={0.5}>
                  <Text style={styles.instaText}>Message</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.instafollowing}>
                <TouchableOpacity activeOpacity={0.5}>
                  <Text style={styles.instaText}>Contact</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.more}>
                <Entypo
                  name="chevron-small-down"
                  color={Platform.OS === 'ios' ? '#fff' : '#000'}
                  size={20}
                />
              </View>
            </View>
            <View style={styles.tabsView}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setTabs('grid')}>
                <MaterialIcons
                  color={
                    tabs === 'grid'
                      ? Platform.OS === 'ios'
                        ? COLOR.white
                        : COLOR.black
                      : Platform.OS === 'ios'
                      ? 'rgba(255,255,255,.5)'
                      : COLOR.blackFade
                  }
                  size={25}
                  name="grid-on"
                />
              </TouchableOpacity>
              <View />
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setTabs('user')}>
                <Feather
                  color={
                    tabs === 'user'
                      ? Platform.OS === 'ios'
                        ? COLOR.white
                        : COLOR.black
                      : Platform.OS === 'ios'
                      ? 'rgba(255,255,255,.5)'
                      : COLOR.blackFade
                  }
                  size={25}
                  name="user"
                />
              </TouchableOpacity>
            </View>
          </View>
          <GalleryImages />
        </View>
      </ScrollView>
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentWrapper: {
    width: '100%',
    alignSelf: 'center',
    // paddingTop: DeviceInfo.wp('8%'),
    marginBottom: DeviceInfo.wp('8%'),
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgView: {
    width: DeviceInfo.width * 0.195,
    height: DeviceInfo.width * 0.195,
    borderWidth: 0.8,
    borderRadius: (DeviceInfo.width * 0.2) / 2,
    borderColor: 'rgba(0,0,0, .1)',
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: (DeviceInfo.width * 0.2) / 2,
  },
  nameView: {
    flexDirection: 'row',
  },
  infoView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: DeviceInfo.width * 0.7,
    // borderWidth:1,
    // borderTopWidth: 0.7,
    // borderBottomWidth: 0.7,
    borderColor: COLOR.blackBorder,
    paddingVertical: 5,
  },
  socialInfoView: {
    alignItems: 'center',
  },
  designation: {
    fontFamily: 'Poppins-Bold',
    fontSize: DeviceInfo.hp('1.9%'),
    color: Platform.OS === 'ios' ? '#fff' : '#000',
  },
  designationName: {
    fontFamily: 'Poppins-Medium',
    fontSize: DeviceInfo.hp('1.6%'),
    color: Platform.OS === 'ios' ? '#fff' : '#000',
  },
  name: {
    fontFamily: 'Raleway-Medium',
    fontSize: DeviceInfo.hp('2.2%'),
  },
  dot: {
    marginLeft: 12,
    marginTop: -DeviceInfo.hp('1.2%'),
  },
  followText: {
    backgroundColor: COLOR.blue,
    paddingHorizontal: 10,
    height: DeviceInfo.hp('2.7%'),
    includeFontPadding: false,
    textAlignVertical: 'center',
    borderRadius: 3,
    color: COLOR.white,
    fontFamily: 'Poppins-Medium',
    fontSize: DeviceInfo.hp('1.5%'),
  },
  followView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropView: {
    backgroundColor: COLOR.blue,
    paddingHorizontal: 10,
    borderRadius: 3,
    marginLeft: 20,
  },
  separator: {
    height: 10,
  },
  galleryInfoWrapper: {
    marginLeft: DeviceInfo.wp('2%'),
  },
  socialInfoWrapper: {
    marginVertical: DeviceInfo.wp('5%'),
  },
  designationInfoText: {
    fontSize: DeviceInfo.hp('1.3%'),
  },
  infoType: {
    fontFamily: 'Poppins-Medium',
    fontSize: DeviceInfo.hp('1.5%'),
    color: Platform.OS === 'ios' ? '#fff' : 'rgba(0,0,0, .8)',
  },
  tabsView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    borderBottomWidth: 0.7,
    borderColor: COLOR.blackBorder,
  },
  linkText: {
    // color: '#01356a',
    color: Platform.OS === 'ios' ? '#fff' : '#003569',
    fontFamily: 'Poppins-light',
    fontSize: DeviceInfo.hp('1.45%'),
  },
  medicalHealth: {
    fontSize: DeviceInfo.hp('1.45%'),
    color: Platform.OS === 'ios' ? '#fff' : '#003569',
    fontFamily: 'Poppins-light',
  },
  medicalHealthName: {
    fontSize: DeviceInfo.hp('1.5%'),
    color: Platform.OS === 'ios' ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0, .4)',
    fontFamily: 'Poppins-light',
  },
  addBio: {},
  recordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth:1
  },
  instafollowing: {
    flexDirection: 'row',
    alignItems: 'center',
    width: DeviceInfo.width * 0.258,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 3,
    borderRadius: 3,
    height: '100%',
    paddingVertical: 3,
    borderColor:
      Platform.OS === 'ios' ? 'rgba(255,255,255,.2)' : 'rgba(0,0,0, .2)',
  },
  more: {
    borderWidth: 1,
    paddingHorizontal: 3,
    borderRadius: 3,
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor:
      Platform.OS === 'ios' ? 'rgba(255,255,255,.2)' : 'rgba(0,0,0, .2)',
  },
  instaText: {
    includeFontPadding: false,
    textAlignVertical: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: DeviceInfo.hp('1.5%'),
    color: Platform.OS === 'ios' ? '#fff' : '#000',
  },
  wrapper: {
    width: '100%',
    paddingHorizontal: '5%',
    alignSelf: 'center',
    paddingTop: DeviceInfo.wp('8%'),
  },
  followBg: {
    backgroundColor: Platform.OS === 'ios' ? 'transparent' : COLOR.blue,
  },
  followText: {
    color: COLOR.white,
  },
});
