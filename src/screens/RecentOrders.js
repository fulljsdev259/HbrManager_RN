import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  PixelRatio,
  ScrollView,
} from 'react-native';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';
import AppLogo from '../generic/AppLogo';
import BasketCard from '../generic/BasketCard';
import GenericButton from '../generic/GenericButton';

const RecentOrders = ({navigation}) => {
  return (
    <View>
      <View style={styles.container}>
        <ScrollView>
          <AppLogo
            text1="Recent orders"
            style={{
              paddingTop: DeviceInfo.hp('3.8%'),
                paddingBottom: DeviceInfo.hp('1.2%'),
            }}
            textStyle={{color: COLOR.black}}
            logoBg={COLOR.blackBg}
            shop
            // handleText={()=>this.props.navigation.back()}
          />
          <BasketCard type="recent" /* onPress={()=>navigation.navigate('ContactUs')} */ />
        </ScrollView>
      </View>
    </View>
  );
};

export default RecentOrders;

const styles = StyleSheet.create({
  wrapper:{
    width:'80%',
    alignSelf:'center',
    marginBottom: DeviceInfo.hp('7%')
  },  
  price: {
    textAlign: 'right',
    marginVertical: DeviceInfo.hp('1.8%'),
    fontFamily: 'Poppins-Bold',
    fontSize: DeviceInfo.hp('1.5%'),
  },
  conitnueText:{
    fontFamily: 'Poppins-Bold',
    fontSize: DeviceInfo.hp('1.5%'),
  },
  genericBtn:{
    marginVertical:DeviceInfo.hp('1.5%'),
  },
  underline:{
    borderBottomWidth:1,
    marginTop:-3,
  },
  continueView:{
    alignSelf:'center'
  }
});
