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
import LogoText from '../generic/LogoText';

export const contactLenses = [
  {
    img: require('../../assets/product-category/bio-true.jpg'),
    name: 'comfi Colors 1 Day',
    price: '£7.50',
  },
  {
    img: require('../../assets/product-category/clariti.jpg'),
    name: 'comfi Colors 1 Day',
    price: '£7.50',
  },
  {
    img: require('../../assets/product-category/Acuvue.jpg'),
    name: 'Blink-N-Clean Eye Drops',
    price: '£3.99',
    resizeMode: 'cover',
  },
  {
    img: require('../../assets/product-category/Dailies.jpg'),
    name: 'Dailies Total 1',
    price: '£3.99',
    resizeMode: 'cover',
  },
  {
    img: require('../../assets/product-category/my-Day.jpg'),
    name: 'Dailies Total 1',
    price: '£3.99',
    resizeMode: 'cover',
  },
  {
    img: require('../../assets/product-category/softlens.jpg'),
    name: 'Dailies Total 1',
    price: '£3.99',
    resizeMode: 'cover',
  },
  {
    img: require('../../assets/product-category/HBD-Options.jpg'),
    name: 'Dailies Total 1',
    price: '£3.99',
    resizeMode: 'cover',
  },
];

const ProductCategory = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AppLogo logoBg={COLOR.blackBg} />
      <ScrollView>
        <LogoText
          text1="Contact lens brands"
          style={{
            paddingTop: DeviceInfo.hp('6%'),
            paddingBottom: DeviceInfo.hp('4%'),
          }}
          textStyle={{color: COLOR.black}}
        />
        <View style={styles.cardContaner}>
          <View style={styles.cardWrapper}>
            {contactLenses.map((list, i) => {
              return (
                <View key={i} style={styles.card}>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() =>
                      navigation.navigate('OderContactLens', {index: i})
                    }>
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
    flex:1,
    // borderWidth:10,
    // borderColor:'green'
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
    // paddingHorizontal: 10,
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
    borderRadius: 10,
  },
  imgViewWrapper: {
    width: '100%',
    alignSelf: 'center',
  },
});
