import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  PixelRatio,
  ImageBackground,
} from 'react-native';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';
import AppLogo from '../generic/AppLogo';
import GenericTextInput from '../generic/GenericTextInput';
import GenericButton from '../generic/GenericButton';

const openingTimes = [
  {day: 'Monday', time: '8:30 am - 5:30 pm'},
  {day: 'Tuesday', time: '8:30 am - 5:30 pm'},
  {day: 'Wednesday', time: '8:30 am - 5:30 pm'},
  {day: 'Thursday', time: '8:30 am - 5:30 pm'},
  {day: 'Friday', time: 'Closed'},
  {day: 'Saturday', time: 'Closed'},
];

const ContactUs = ({}) => {
  return (
    <View>
      <ImageBackground
        resizeMode="cover"
        style={styles.bgImg}
        source={require('../../assets/WELCOME__APPLY.png')}>
        <View style={styles.overlay}>
          <ScrollView>
            <AppLogo
              text1="Contact us"
              style={{
                paddingTop: DeviceInfo.hp('3.8%'),
                paddingBottom: DeviceInfo.hp('2.2%'),
              }}
            />
            <View>
              <GenericTextInput placeholder="Name" />
              <GenericTextInput placeholder="Email" />
              <GenericTextInput placeholder="Message" type="text-area" />
              <GenericButton style={styles.genericBtn} text="Submit" />
              <View style={styles.infoWrapper}>
                <View style={styles.contentView}>
                  <Text style={styles.mediumText}>
                    Hodd Barnes & Dickins Ltd
                  </Text>
                  <Text style={styles.mediumText}>11 Masons Avenue</Text>
                  <Text style={styles.mediumText}>London</Text>
                  <Text style={styles.mediumText}>EC2V 5HR</Text>
                </View>
                <View style={styles.contentView}>
                  <View style={styles.contactInfoView}>
                    <Text style={styles.boldText}>Phone: </Text>
                    <Text style={styles.mediumText}>0207 600 9861</Text>
                  </View>
                  <View style={styles.contactInfoView}>
                    <Text style={styles.boldText}>Fax: </Text>
                    <Text style={styles.mediumText}>0207 606 1396</Text>
                  </View>
                  <View style={styles.contactInfoView}>
                    <Text style={styles.boldText}>Email: </Text>
                    <Text style={styles.mediumText}>
                      reception@hoddbarnesdickins.com
                    </Text>
                  </View>
                </View>
                <View style={styles.contentView}>
                  <Text style={styles.boldText}>Opening Times</Text>
                </View>
                <View style={styles.contentView}>
                  {openingTimes.map((list, i) => {
                    return (
                      <View style={styles.contactInfoView} key={i}>
                        <Text style={[styles.mediumText, styles.day]}>
                          {list.day}
                        </Text>
                        <Text style={styles.mediumText}>{list.time}</Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  bgImg: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    backgroundColor: COLOR.overlay,
    flex: 1,
  },
  mediumText: {
    fontFamily: 'Poppins-Medium',
    color: COLOR.white,
    fontSize: DeviceInfo.hp('1.5%'),
  },
  boldText: {
    fontFamily: 'Poppins-Bold',
    color: COLOR.white,
    fontSize: DeviceInfo.hp('1.8%'),
  },
  infoWrapper: {
    width: '80%',
    alignSelf: 'center',
  },
  contentView: {
    marginBottom: DeviceInfo.wp('4%'),
  },
  contactInfoView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  day: {
    width: DeviceInfo.wp('30%'),
  },
  genericBtn: {
    marginTop: DeviceInfo.hp('1.2%'),
    marginBottom: DeviceInfo.hp('6%'),
  },
});
