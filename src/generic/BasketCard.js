import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  PixelRatio,
  VirtualizedList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';

const BasketCard = ({type, onPress}) => {
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
              {type ? (
                <Text style={styles.price}>£7.50</Text>
              ) : (
                <Text style={styles.itemDetails}>
                  Dapibus mus eros. Leo potenti. Id Malesuada nulla interdum
                  scelerisque.
                </Text>
              )}
            </View>
            <View>
              {!type && (
                <View style={styles.countView}>
                  <TouchableOpacity activeOpacity={0.5}>
                    <View style={styles.handleCountTextView}>
                      <Image
                        source={require('../../assets/less.png')}
                        style={{width: '100%', height: '100%'}}
                      />
                    </View>
                  </TouchableOpacity>
                  <View style={[styles.totalTextView]}>
                    <Text style={styles.totalView}>1</Text>
                  </View>
                  <TouchableOpacity activeOpacity={0.5}>
                    <View style={styles.handleCountTextView}>
                      <Image
                        source={require('../../assets/more.png')}
                        style={{width: '100%', height: '100%'}}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
          <View
            style={[
              styles.deleteView,
              {justifyContent: type ? 'center' : 'space-between'},
            ]}>
            <View style={styles.deleteTextView}>
              <Text
                style={[
                  styles.deleteText,
                  type ? styles.mb : {},
                  Platform.OS === 'ios' &&
                    DeviceInfo.height < 700 && {marginBottom: 3},
                ]}>
                {type ? 'Order date' : 'Delete'}
              </Text>
              {!type && (
                <View
                  style={[
                    styles.underLine,
                    styles.mb,
                    styles.underLineForBasket,
                  ]}
                />
              )}
            </View>
            {type && (
              <Text
                style={[
                  styles.deleteText,
                  styles.mb,
                  Platform.OS === 'ios' &&
                    DeviceInfo.height < 700 && {marginBottom: 3},
                  {color: COLOR.yellow},
                ]}>
                22/2/20
              </Text>
            )}
            {type && (
              <View style={[styles.deleteTextView]}>
                <Text style={styles.deleteText}>View order</Text>
                <View style={styles.underLine} />
              </View>
            )}
            {!type && <Text style={styles.price}>£7.50</Text>}
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

  const _keyExtractor = (item, index) => index;

  const data = type ? [1, 1, 1, 1] : [1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <View>
      <VirtualizedList
        data={data}
        renderItem={_renderItem}
        getItem={_getItem}
        getItemCount={_getItemCount}
        keyExtractor={_keyExtractor}
      />
    </View>
  );
};

export default BasketCard;

const styles = StyleSheet.create({
  contentView: {
    flexDirection: 'row',
    width: '92%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    paddingBottom: DeviceInfo.hp('1.7%'),
    marginBottom: DeviceInfo.hp('1.7%'),
  },
  imgView: {
    width: DeviceInfo.width * 0.19,
    height: DeviceInfo.width * 0.19,
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
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  name: {
    fontFamily: 'Poppins-Regular',
    fontSize: DeviceInfo.hp('1.63%'),
  },
  itemDetails: {
    fontFamily: 'Poppins-Light',
    fontSize: DeviceInfo.hp('1.1%'),
  },
  price: {
    fontFamily: 'Poppins-Bold',
    fontSize: DeviceInfo.hp('1.4%'),
    includeFontPadding: false,
  },
  itemDetailsView: {
    width: DeviceInfo.wp('50%'),
    justifyContent: 'space-between',
  },
  countView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: DeviceInfo.hp('2.3%'),
  },
  handleCountTextView: {
    width: DeviceInfo.wp('5%'),
    height: DeviceInfo.wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: DeviceInfo.wp('2.5%'),
  },
  countHandleText: {
    color: COLOR.white,
    fontSize: DeviceInfo.hp('2.5%'),
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  deleteView: {
    flexDirection: 'column',
  },
  deleteText: {
    fontFamily: 'Poppins-Medium',
    fontSize: DeviceInfo.hp('1.3%'),
    alignSelf: 'center',
  },
  totalView: {
    fontFamily: 'Poppins-Medium',
    fontSize: DeviceInfo.hp('1.5%'),
    includeFontPadding: false,
  },
  underLine: {
    borderBottomWidth: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -2,
  },
  underLineForBasket: {
    width: '100%',
    alignSelf: 'center',
  },
  totalTextView: {
    borderWidth: 1,
    borderColor: COLOR.yellow,
    width: DeviceInfo.width * 0.16,
    borderRadius: 8,
    height: DeviceInfo.wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: DeviceInfo.wp('2%'),
  },
  mb: {
    marginBottom: 5,
  },
});
