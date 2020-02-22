import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  PixelRatio,
  VirtualizedList,
} from 'react-native';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';

const BasketCard = ({type}) => {
  const _renderItem = (item, index) => {
    return (
      <View style={styles.contentView}>
        <View style={styles.imgView}>
          <Image
            resizeMode="contain"
            style={styles.img}
            source={require('../../assets/comfi-pure51042-132basket.png')}
          />
        </View>
        <View style={styles.detailsView}>
          <View style={styles.itemDetailsView}>
            <View>
              <Text style={styles.name}>comfi Colors 1 Day</Text>
              <Text style={styles.itemDetails}>
                Dapibus mus eros. Leo potenti. Id. Malesuada nulla interdum
                scelerisque.{' '}
              </Text>
            </View>
            <View>
              <Text style={styles.price}>£7.50</Text>
            </View>
          </View>
          <View style={[
              styles.deleteView,
              {justifyContent:type ? 'center' : 'space-evenly'}
            ]}>
            <View style={styles.deleteTextView}>
                <Text style={styles.deleteText}>{type ? "Order date" :"Delete"}</Text>
                {!type && <View style={styles.underLine}/>}
            </View>
            {type && <Text style={[styles.deleteText,{color:COLOR.yellow}]}>22/2/20</Text>}
            {!type &&<View style={styles.totalTextView}>
              <Text style={styles.totalView}>1</Text>
            </View>
            } 
            {type &&<View style={styles.deleteTextView}>
              <Text style={styles.deleteText}>View order</Text>
              <View style={styles.underLine}/>
            </View>
            } 
            
            {!type && <View style={styles.countView}>
              <View style={styles.handleCountTextView}>
                <Text style={styles.countHandleText}>+</Text>
              </View>
              <View style={styles.handleCountTextView}>
                <Text style={styles.countHandleText}>-</Text>
              </View>
            </View>}
          </View>
        </View>
      </View>
    );
  };
  const _getItem = (item, index) => {
    return item;
  };

  const _getItemCount = item => {
    return item.length;
  };

  const data =type ?  [1,1,1,1] : [1, 1, 1,1,1,1,1,1,1];
  return (
    <View>
      <VirtualizedList
        data={data}
        renderItem={_renderItem}
        getItem={_getItem}
        getItemCount={_getItemCount}
      />
    </View>
  );
};

export default BasketCard;

const styles = StyleSheet.create({
  contentView: {
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    borderBottomWidth:1,
    paddingBottom:DeviceInfo.hp("1.5%"),
    marginBottom:DeviceInfo.hp("1.5%")
  },
  imgView: {
    width: DeviceInfo.width * 0.15,
    height: DeviceInfo.width * 0.15,
    borderWidth: 1,
    borderColor: COLOR.yellow,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '85%',
    height: '85%',
  },
  detailsView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  name: {
    fontFamily: 'Poppins-Regular',
    fontSize: DeviceInfo.hp('1.5%'),
  },
  itemDetails: {
    fontFamily: 'Poppins-Light',
    fontSize: DeviceInfo.hp('.9%'),
  },
  price: {
    fontFamily: 'Poppins-Bold',
    fontSize: DeviceInfo.hp('1.3%'),
  },
  itemDetailsView: {
    width: DeviceInfo.wp('40%'),
    justifyContent: 'space-between',
  },
  countView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  handleCountTextView: {
    backgroundColor:COLOR.black,
    width:DeviceInfo.wp('3.4%'),
    height:DeviceInfo.wp('3.4%'),
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    borderRadius:DeviceInfo.wp('1.8%'),
    paddingBottom:1.4
  },
  countHandleText:{
    color:COLOR.white,
    fontSize: DeviceInfo.hp('1.3%'),
  },
  deleteView: {
    flexDirection:"column",
  },
  deleteText: {
    fontFamily: 'Poppins-Medium',
    fontSize: DeviceInfo.hp('1.1%'),
  },
  totalView: {
    fontFamily: 'Poppins-Medium',
    fontSize: DeviceInfo.hp('1.1%'),
  },
  underLine:{
    borderBottomWidth: 1,
    marginTop:-3
  },
  totalTextView:{
    borderWidth: 1,
    borderColor: COLOR.yellow,
    paddingHorizontal: DeviceInfo.wp('3.2%'),
    borderRadius:DeviceInfo.wp('2.5%'),
    height:DeviceInfo.wp('3.5%'),
    justifyContent:'center',
    alignItems:'center',
    paddingTop:3
  }
});
