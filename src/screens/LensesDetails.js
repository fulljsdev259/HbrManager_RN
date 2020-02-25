import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  CheckBox,
  Picker,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import DeviceInfo from '../utiles/deviceInfo';
import Icon from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLOR from '../utiles/color';
import AppLogo from '../generic/AppLogo';
import ModalDropdown from 'react-native-modal-dropdown';
import GenericButton from '../generic/GenericButton';

const lense = [
  {
    name: 'Power',
  },
  {
    name: 'Base Curve',
    one: '8.6',
  },
  {
    name: 'Diameter',
    one: '14.2',
  },
];

export default class ImageCarousel extends Component {
  constructor() {
    super();
    this.state = {
      entries: [
        {
          img: require('../../assets/contact-lenses/Blink-N-Clean-Eye-Drops.png'),
          name: 'comfi Colors 1 Day',
          price: '£7.50',
          pack: 12,
        },
        {
          img: require('../../assets/contact-lenses/comfi-pure51042-132.png'),
          name: 'comfi Colors 1 Day',
          price: '£7.50',
          pack: 15,
        },
        {
          img: require('../../assets/contact-lenses/blink-n-clean-eye-drops788-131.png'),
          name: 'Blink-N-Clean Eye Drops',
          price: '£3.99',
          resizeMode: 'contain',
          pack: 12,
        },
        {
          img: require('../../assets/contact-lenses/dailies-total-1786-131.png'),
          name: 'Dailies Total 1',
          price: '£3.99',
          pack: 25,
        },
        {
          img: require('../../assets/contact-lenses/comfi-all-in-one-solution-3-month788-131.png'),
          name: 'comfi All-in-One Solution Triple Pack',
          price: '£12.50',
          resizeMode: 'contain',
          pack: 125,
        },
        {
          img: require('../../assets/contact-lenses/comfi-drops1061-137.png'),
          name: 'comfi Drops',
          price: '£3.75',
          resizeMode: 'contain',
          pack: 12,
        },
        {
          img: require('../../assets/contact-lenses/Blink-N-Clean-Eye-Drops.png'),
          name: 'comfi Drops',
          price: '£3.75',
          pack: 12,
        },
        {
          img: require('../../assets/contact-lenses/comfi-pure51042-132.png'),
          name: 'comfi Drops',
          price: '£3.75',
          pack: 12,
        },
      ],
      activeSlide: 0,
      isEntries: false,
      left:true,
      right:true
    };
  }
  componentDidMount() {
      const {index} =this.props.route.params
    const {isEntries} = this.state;
    if (
      !isEntries &&
      this.props.DescriptionImage !== undefined &&
      this.props.DescriptionImage
    ) {
      this.setState({entries: this.props.DescriptionImage, isEntries: true});
    }
  }
  _renderItem({item}) {
    return (
      <View
        style={{
          width: '85%',
          //   borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          //   paddingTop:20
          //   height: DeviceInfo.hp('25%'),

          //   alignSelf: 'center',
          //   alignItems: 'center',
        }}>
        <View style={styles.priceView}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.numOfPack}>{item.pack} Pack</Text>
            <Text style={styles.price}>£3.75</Text>
          </View>
        </View>

        <Image
          style={{
            width: '60%',
            // borderWidth: 1,
            height: DeviceInfo.hp('15%'),
            marginVertical: DeviceInfo.hp('6%'),
            // marginBottom:-20
          }}
          resizeMode="contain"
          source={item.img}
        />
      </View>
    );
  }
  _onPressNext = () => {
    if (this.state.activeSlide == this.state.entries.length - 1) {
      this.setState({activeSlide: this.state.entries.length - 1});
    } else {
      this.setState({activeSlide: this.state.activeSlide + 1});
    }
  };
  _onPressPrev = () => {
    if (this.state.activeSlide == 0) {
      this.setState({activeSlide: 0});
    } else {
      this.setState({activeSlide: this.state.activeSlide - 1});
    }
  };
  wp(percentage) {
    const value = (percentage * DeviceInfo.width) / 100;
    return Math.round(value);
  }

  checkbox = (value) => {
    return (
      <TouchableOpacity onPress={()=>this.setState({[value]:!this.state[value]})} activeOpacity={0.5}>
        <View style={styles.checkbox}>
          {this.state[value] && <Octicons style={styles.checkIcon} name="check" />}
        </View>
      </TouchableOpacity>
    );
  };

  _renderDashView = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        {[1, 1, 1, 1, 1].map(() => {
          return (
            <View
              style={{
                width: 10,
                height: 1.2,
                backgroundColor: COLOR.black,
                marginRight: 2,
              }}
            />
          );
        })}
      </View>
    );
  };

  render() {
    console.log(this.props,'kkkkkkkkkk');
    
    const slideHeight = DeviceInfo.height * 0.36;
    const slideWidth = this.wp(100);
    const itemHorizontalMargin = this.wp(2);

    const sliderWidth = DeviceInfo.width;
    const itemWidth = slideWidth + itemHorizontalMargin * 0.01;
    return (
      <View style={styles.container}>
        <ScrollView>
          <AppLogo
            text1="Comfi Colors 1 Day"
            style={{
              paddingTop: DeviceInfo.hp('3.8%'),
              //   paddingBottom: DeviceInfo.hp('4%'),
            }}
            textStyle={{color: COLOR.black}}
            logoBg={COLOR.blackBg}
            shop
            // handleText={()=>this.props.navigation.back()}
          />

          <View style={styles.carouselWrapper}>
            <Carousel
              ref={c => {
                this._carousel = c;
              }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              //   sliderHeight={100}
              itemWidth={itemWidth}
              //   itemHeight={200}
              firstItem={this.state.activeSlide}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.7}
              onSnapToItem={index => this.setState({activeSlide: index})}
            />
            <View style={styles.arrowView}>
              <View style={styles.leftarrow}>
                <Icon
                  onPress={() => this._onPressPrev()}
                  name="angle-left"
                  size={25}
                  style={styles.icon}
                />
              </View>
              <View style={styles.rightarrow}>
                <Icon
                  onPress={() => this._onPressNext()}
                  name="angle-right"
                  size={25}
                  style={styles.icon}
                />
              </View>
              {/* )} */}
            </View>
          </View>
          <View style={styles.wrapper}>
            <View style={styles.lensesTypeView}>
              <Text style={styles.sideText}>Eye</Text>
              <View style={styles.checkboxView}>
                {this.checkbox("left")}
                <Text style={styles.sideText}>Left</Text>
              </View>
              <View style={styles.checkboxView}>
                {this.checkbox("right")}
                <Text style={styles.sideText}>Right</Text>
              </View>
            </View>
            <View>
              {lense.map(list => {
                return (
                  <View style={styles.dropdownSectionView}>
                    <Text style={styles.sideText}>{list.name}</Text>
                    <View style={styles.dropdownView}>
                      <View
                        style={[
                          styles.dropdownWrapper,
                          {paddingVertical: list.one ? 0 : 7,height:list.one ? 18 : null},
                        ]}>
                        {!list.one ? (
                          <>
                            {this._renderDashView()}
                            <View style={styles.dropIconView}>
                              <Image
                                style={{width: 12, height: 15}}
                                resizeMode="contain"
                                source={require('../../assets/Polygon_1.png')}
                              />
                            </View>
                          </>
                        ) : (
                          <Text style={styles.curve}>{list.one}</Text>
                        )}
                      </View>
                      <View
                        style={[
                          styles.dropdownWrapper,
                          {paddingVertical: list.one ? 0 : 7},
                        ]}>
                        {!list.one ? (
                          <>
                            {this._renderDashView()}
                            <View style={styles.dropIconView}>
                              <Image
                                style={{width: 12, height: 15}}
                                resizeMode="contain"
                                source={require('../../assets/Polygon_1.png')}
                              />
                            </View>
                          </>
                        ) : (
                          <Text style={styles.curve}>{list.one}</Text>
                        )}
                      </View>
                    </View>
                  </View>
                );
              })}

              {/* <ModalDropdown
                style={{backgroundColor:"red"}}
                defaultValue={<Text>dvsdvsvd</Text>}
                show={false} options={['option  jbf kjasbfa sfkjabsf1', 'option 2']}/> */}
            </View>
            <Text style={[styles.price, styles.totalCharge]}>
              Total - £15.00
            </Text>
            <GenericButton 
                text="Add to baseket"
                onPress={()=>this.props.navigation.navigate('Basket')}
              />
            <Text style={styles.descriptionText}>Description</Text>
            <View style={styles.textWrapper}>
              <View style={styles.overlay}>
                {/* <Text style={styles.readmore}>>> Read more</Text> */}
              </View>
              <Text style={styles.contentText}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate .
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // width:
  },
  carouselWrapper: {
    // height: 100,
    width: '85%',
    alignSelf: 'center',
  },
  wrapper: {
    width: '85%',
    alignSelf: 'center',
    marginTop: -DeviceInfo.hp('4%'),
  },
  parentView: {
    position: 'relative',
    zIndex: -10,
    bottom: 50,
    // borderWidth: 5,
    // borderColor: COLOR.PARENTVIEW,
    backgroundColor: 'black',
  },
  arrowView: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    fontSize: DeviceInfo.hp('8%'),
    color: COLOR.yellow,
  },
  checkbox: {
    width: DeviceInfo.wp('4%'),
    height: DeviceInfo.wp('4%'),
    borderWidth:1.5,
    borderColor: COLOR.yellow,
    borderRadius: DeviceInfo.wp('1.3%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  checkIcon: {
    fontWeight: '800',
    fontSize: DeviceInfo.wp('3%'),
  },
  lensesTypeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  checkboxView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sideText: {
    fontFamily: 'Poppins-Bold',
    fontSize: DeviceInfo.hp('1.3%'),
  },
  dropdownWrapper: {
    borderWidth: 1.3,
    borderColor: COLOR.yellow,
    // height:DeviceInfo.hp("2%"),
    flexDirection: 'row',
    justifyContent: 'center',
    width: DeviceInfo.wp('30%'),
    marginLeft: 5,
    borderRadius: 4,
    marginVertical: DeviceInfo.hp('.6%'),
  },
  dropdownView: {
    flexDirection: 'row',
  },
  dropdownSectionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    height: DeviceInfo.hp('2%'),
    borderWidth: 1,
  },
  dash: {
    fontSize: 30,
    borderWidth: 1,
    fontWeight: '900',
  },
  dropIconView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    zIndex: 100,
    paddingRight: 5,
  },
  descriptionText: {
    fontFamily: 'Poppins-Bold',
    fontSize: DeviceInfo.hp('1.5%'),
    marginTop: DeviceInfo.hp('1.8%'),
  },
  contentText: {
    fontFamily: 'Poppins-Light',
    fontSize: DeviceInfo.hp('1.1%'),
  },
  priceView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  numOfPack: {
    fontFamily: 'Poppins-Regular',
    fontSize: DeviceInfo.hp('1.5%'),
  },
  price: {
    fontFamily: 'Poppins-Bold',
    fontSize: DeviceInfo.hp('1.5%'),
  },
  curve: {
    //   lineHeight:12
    fontSize: 10,
    //   fontFamily:'Poppins-Regular'
  },
  totalCharge: {
    textAlign: 'right',
    marginVertical: DeviceInfo.hp('1.8%'),
  },
  textWrapper: {
    // height:100
  },
  overlay: {
    width: '100%',
    height: '40%',
    position: 'absolute',
    // backgroundColor: 'rgba(255,255,255,.3)',
    bottom: 0,
    zIndex: 100,
    shadowOffset:{  width: 300,  height: 10,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    elevation:10
  },
  readmore: {
    color: COLOR.yellow,
    fontFamily: 'Poppins-Bold',
  },
});
