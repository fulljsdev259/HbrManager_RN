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
import {TouchableOpacity} from 'react-native-gesture-handler';

export const contactLenses = [
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
    resizeMode: 'contain',
  },
  {
    img: require('../../assets/contact-lenses/dailies-total-1786-131.png'),
    name: 'Dailies Total 1',
    price: '£3.99',
  },
];

const ProductCategory = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <AppLogo
          text1="Contact lenses category"
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
                
                  <View key={i} style={styles.card}>
                    <TouchableOpacity activeOpacity={.5} onPress={()=>navigation.navigate('LensesDetails',{index:i})}>
                    <View style={styles.imgViewWrapper}>
                      <View style={styles.imgView}>
                        <Image
                          resizeMode={list.resizeMode}
                          style={styles.img}
                          source={list.img}
                        />
                      </View>
                    </View>
                    </TouchableOpacity>
                  </View>
                
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductCategory;

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
    marginBottom: DeviceInfo.hp('1.1%'),
    paddingHorizontal: 10,
  },
  cardContaner: {
    alignItems: 'center',
    marginBottom: DeviceInfo.hp('7%'),
  },
  imgView: {
    width: '100%',
    alignSelf: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  imgViewWrapper: {
    width: '100%',
    alignSelf: 'center',
  }
});
