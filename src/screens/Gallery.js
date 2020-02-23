import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';
import AppLogo from '../generic/AppLogo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GalleryImages from '../generic/GalleryImages';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

const Gallery = ({text1, text2, style}) => {
  const [tabs, setTabs] = useState('grid');
  return (
    <View style={styles.container}>
      <ScrollView>
        <AppLogo logoBg={COLOR.blackBg} />
        <View style={styles.contentWrapper}>
          <View style={styles.headerView}>
            <View style={styles.imgView}>
              <Image
                style={styles.img}
                source={require('../../assets/images.jpg')}
              />
            </View>
            <View style={styles.galleryInfoWrapper}>
              <View style={styles.nameView}>
                <Text style={styles.name}>hbdopticians</Text>
                <Text style={[styles.name, styles.dot]}>...</Text>
              </View>
              <View style={styles.separator} />
              <View style={styles.followView}>
                <Text style={styles.followText}>Follow</Text>
                <View style={styles.dropView}>
                  <Ionicons
                    style={styles.dropIcon}
                    color={COLOR.white}
                    name="md-arrow-dropdown"
                    size={DeviceInfo.hp('2.7%')}
                  />
                </View>
                {/* </View> */}
              </View>
            </View>
          </View>
          <View style={styles.socialInfoWrapper}>
            <Text style={styles.designation}>
              Hodd Barnes Dickins Opticians
            </Text>
            <Text style={styles.designationInfoText}>
              Holborn's Best Optician bringing the most exclusive styles and
              design to London. A stone's throw from Halborn Station.
            </Text>
            <Text style={styles.linkText}>www.hoddbarnesdickins.co.uk</Text>
          </View>
          <View style={styles.infoView}>
            <View style={styles.socialInfoView}>
              <Text style={styles.designation}>170</Text>
              <Text style={styles.infoType}>posts</Text>
            </View>
            <View style={styles.socialInfoView}>
              <Text style={styles.designation}>745</Text>
              <Text style={styles.infoType}>followers</Text>
            </View>
            <View style={styles.socialInfoView}>
              <Text style={styles.designation}>33</Text>
              <Text style={styles.infoType}>following</Text>
            </View>
          </View>
          <View style={styles.tabsView}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => setTabs('grid')}>
              <MaterialIcons
                color={tabs === 'grid' ? COLOR.blue : COLOR.blackFade}
                size={23}
                name="grid-on"
              />
            </TouchableOpacity>
            <View />
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => setTabs('user')}>
              <Feather
                color={tabs === 'user' ? COLOR.blue : COLOR.blackFade}
                size={23}
                name="user"
              />
            </TouchableOpacity>
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
    backgroundColor: COLOR.galleryBg,
  },
  contentWrapper: {
    width: '90%',
    alignSelf: 'center',
    paddingTop: DeviceInfo.wp('8%'),
    marginBottom:DeviceInfo.wp('8%')
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgView: {
    width: DeviceInfo.width * 0.15,
    height: DeviceInfo.width * 0.15,
    borderWidth: 0.8,
    borderRadius: (DeviceInfo.width * 0.2) / 2,
    borderColor: 'rgba(0,0,0, .5)',
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
    borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    borderColor: COLOR.blackBorder,
    paddingVertical: 5,
  },
  socialInfoView: {
    alignItems: 'center',
  },
  designation: {
    fontFamily: 'Raleway-Bold',
    fontSize: DeviceInfo.hp('1.5%'),
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
    marginLeft: DeviceInfo.wp('4%'),
  },
  socialInfoWrapper: {
    marginVertical: DeviceInfo.wp('5%'),
  },
  designationInfoText: {
    fontSize: DeviceInfo.hp('1.3%'),
  },
  infoType: {
    fontFamily: 'Poppins-Medium',
    fontSize: DeviceInfo.hp('1.4%'),
    color: COLOR.blackFade,
  },
  tabsView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 7,
    borderBottomWidth: 0.7,
    borderColor: COLOR.blackBorder,
  },
  linkText: {
    color: '#01356a',
    fontFamily: 'Poppins-Bold',
    fontSize: DeviceInfo.hp('1.4%'),
  },
});
