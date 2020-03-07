import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  PixelRatio,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';
import AppLogo from '../generic/AppLogo';
import BasketCard from '../generic/BasketCard';
import GenericButton from '../generic/GenericButton';
import LogoText from '../generic/LogoText';

const Basket = ({navigation}) => {
  return (
    // <View>
      <View style={styles.container}>
        <AppLogo
          logoBg={COLOR.blackBg}
        />
        <ScrollView>
          <LogoText
            text1="Basket"
            style={{
              paddingTop: DeviceInfo.hp('3.8%'),
              paddingBottom: DeviceInfo.hp('1.2%'),
            }}
            shop
            handleText={()=>navigation.goBack()}
            textStyle={{color: COLOR.black}}
          />
          <BasketCard />
          <View style={styles.wrapper}>
            <Text style={styles.price}>Basket Total - £22.50</Text>
            <GenericButton
              style={styles.genericBtn}
              text="Proceed to checkout"
              btnViewStyle={{width: '100%'}}
              onPress={() => navigation.navigate('RecentOrders')}
            />
            <View style={styles.continueView}>
              <TouchableOpacity
                onPress={() => navigation.navigate('OderContactLens')}
                activeOpacity={0.5}>
                <Text style={styles.conitnueText}>Continue shopping</Text>
              </TouchableOpacity>
              <View style={styles.underline} />
            </View>
          </View>
        </ScrollView>
      </View>
    // </View>
  );
};

export default Basket;

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  wrapper: {
    width: '80%',
    alignSelf: 'center',
    marginBottom: DeviceInfo.hp('7%'),
  },
  price: {
    textAlign: 'right',
    marginVertical: DeviceInfo.hp('1.8%'),
    fontFamily: 'Poppins-Bold',
    fontSize: DeviceInfo.hp('1.5%'),
  },
  conitnueText: {
    fontFamily: 'Poppins-Bold',
    fontSize: DeviceInfo.hp('1.5%'),
  },
  genericBtn: {
    marginVertical: DeviceInfo.hp('1.5%'),
  },
  underline: {
    borderBottomWidth: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -2,
  },
  continueView: {
    alignSelf: 'center',
  },
});
