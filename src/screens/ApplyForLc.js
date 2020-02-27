import React, {Component, useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  PixelRatio,
  Platform,
  //   Picker,
} from 'react-native';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';
import AppLogo from '../generic/AppLogo';
import GenericTextInput from '../generic/GenericTextInput';
import GenericButton from '../generic/GenericButton';
import {Picker, Form, Content, Icon} from 'native-base';
// https://i.diawi.com/aDGouu

console.log(DeviceInfo.height,'kkkk')

const textFeild = [
  'Patient number',
  'Black or teal card',
  'First name',
  'Last name',
  'Phone number',
  'Email',
  'Repeat email',
  'Password',
  'Repeat password',
];
const changePassword = ['New password', 'Confirm password'];

const ApplyForLc = ({route, navigation}) => {
  const [card, setCard] = useState('');
  const isToChangePassword =
    route.params && route.params && route.params.isToChangePassword;
  const feildsToRender = isToChangePassword ? changePassword : textFeild;
  return (
    <View style={styles.container}>
      <ScrollView>
        <AppLogo
          text1={isToChangePassword ? 'Change password' : 'Apply for a'}
          text2={isToChangePassword ? ' ' : 'loyalty card'}
          style={{
            paddingTop: DeviceInfo.hp('7%'),
            paddingBottom: DeviceInfo.hp('4%'),
          }}
        />
        {feildsToRender.map((item, i) => {
          if (i == 1 && !isToChangePassword) {
            if (Platform.OS === 'ios') {
              return (
                <View key={i} style={styles.pickerView}>
                  <Content>
                    <Form>
                      <Picker
                        mode="dropdown"
                        iosHeader="Select card"
                        iosIcon={
                          <Icon
                            name="arrow-down"
                            style={{color: COLOR.yellow, ...styles.pb}}
                          />
                        }
                        style={{width: undefined, color: COLOR.white,...styles.pb}}
                        selectedValue={card}
                        placeholder="Select card"
                        textStyle={{
                          color: COLOR.white,
                          fontSize: DeviceInfo.hp('1.6%'),
                        }}
                        itemTextStyle={{
                          color: COLOR.black,
                          fontFamily: 'Poppins-Regular',
                        }}
                        placeholderIconColor="red"
                        onValueChange={(itemValue, itemIndex) =>
                          setCard(itemValue)
                        }>
                        {/* <Picker.Item label="Select card" value="default" /> */}
                        <Picker.Item label="Black Card" value="black" />
                        <Picker.Item label="Teal Card" value="teal" />
                      </Picker>
                    </Form>
                  </Content>
                </View>
              );
            } else {
              return (
                <View key={i} style={styles.pickerView}>
                  <Picker
                    selectedValue={card}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                      setCard(itemValue)
                    }>
                    <Picker.Item label="Select card" value="" />
                    <Picker.Item label="Black" value="black" />
                    <Picker.Item label="Teal" value="teal" />
                  </Picker>
                  <View style={styles.dropIconView}>
                    <Image
                      style={{width: 12, height: 15}}
                      resizeMode="contain"
                      source={require('../../assets/Polygon_1.png')}
                    />
                  </View>
                </View>
              );
            }
          }
          return <GenericTextInput placeholder={item} style={styles.input} />;
        })}

        <GenericButton
          text="Submit"
          style={styles.genericBtn}
          onPress={() => navigation.navigate('AppLoyaltyCard')}
        />
      </ScrollView>
    </View>
  );
};

export default ApplyForLc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.blackBg,
  },
  genericBtn: {
    marginTop: DeviceInfo.hp('3.2%'),
    marginBottom: DeviceInfo.hp('9%'),
  },
  input: {
    backgroundColor: 'rgba(67,68,69,.4)',
    fontSize: DeviceInfo.hp('1.6%'),
    color: COLOR.white,
  },
  picker: {
    height: DeviceInfo.hp('5.1%'),
    color: COLOR.white,
    width: '160%',
    borderRadius: 70,
    transform: [{scaleX: 0.9}, {scaleY: 0.9}],
    borderWidth: 4,
    marginLeft: -23,
  },
  pickerView: {
    width: '80%',
    alignSelf: 'center',
    borderRadius: 30,
    backgroundColor: 'rgba(67,68,69,.4)',
    marginBottom: DeviceInfo.hp('1.5%'),
    paddingLeft: DeviceInfo.height < 700 ? 5 : 10,
    height: DeviceInfo.hp('5.1%'),
  },
  dropIconView: {
    position: 'absolute',
    right: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '10%',
    height: DeviceInfo.hp('5.1%'),
  },
  pb:{
    paddingBottom:DeviceInfo.height < 700 ? 14 :4
  }
});
