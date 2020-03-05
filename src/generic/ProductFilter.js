import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';
import AppLogo from '../generic/AppLogo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Card} from 'native-base';

const filtersType = [
  {name:'Sort', categories:["Daily","Multifocal","Astigmatism/Toric","2 Weekly","Extended Wear",]},
  {name:'Category',categories:["Daily","Multifocal","Astigmatism/Toric","2 Weekly","Extended Wear",]},
  {name:'Price',categories:['Price - Low to High', 'Price - High to Low', 'Newest First']},
  {name:'Brand', categories:['ACUVUE','DAILIES', 'MyDay', 'HDR Options', 'clariti', 'Biotrue', 'SofLens' ]},
  {name:'Lens Color', categories:['Spicy Gray', 'Aqua Color', 'Dusky Brown']},
];

const ProductFilter = ({setFilter}) => {
  const [filterValue, setValue] = useState('Sort');
  const [filterIndex, setIndex] = useState(0);
  const [defautValue, setDefaultValue] = useState(0);
  const [categories, setCategory] = useState(filtersType[0].categories)

  return (
    <View style={styles.filterContainer}>
      <AppLogo textStyle={{color: COLOR.black}} logoBg={COLOR.blackBg} />
      <View style={styles.header}>
        <AntDesign
          onPress={setFilter}
          name="close"
          style={styles.crossIcon}
          color={COLOR.offWhite}
        />
        <Text style={styles.filterText}>Filters</Text>
      </View>
      <Card style={styles.handleBtns}>
        <TouchableOpacity style={{width: '35%'}} activeOpacity={0.5}>
          <View style={styles.resetView}>
            <Text style={styles.resetText}>RESET ALL</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={setFilter} style={{width: '62%'}} activeOpacity={0.5}>
          <View style={styles.applyView}>
            <Text style={styles.applyText}>APPLY FILTERS</Text>
          </View>
        </TouchableOpacity>
      </Card>
      <View>
        <View style={styles.listContainer}>
          <Card style={styles.cardWrapper}>
            {filtersType.map((list, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    setValue(list.name);
                    setIndex(i);
                    setCategory(list.categories)
                  }}
                  activeOpacity={0.5}>
                  <View
                    style={[
                      styles.typeView,
                      i == filtersType.length - 1 ? {...styles.lastItem} : {},
                      filterValue == list.name
                        ? {backgroundColor: COLOR.mediumGreen}
                        : {},
                    ]}>
                    <Text
                      style={[
                        styles.typeText,
                        filterValue == list.name ? {color: COLOR.white} : {},
                      ]}>
                      {list.name}
                    </Text>
                  </View>
                  {i == filtersType.length - 1 && (
                    <View style={styles.underLine} />
                  )}
                </TouchableOpacity>
              );
            })}
          </Card>
          {categories && categories.length >0  &&  <Card
            style={[
              styles.filterOptions,
              {top: filterIndex * DeviceInfo.hp('5.2%')},
            ]}>
            {categories.map(
              (list, i) => {
                return (
                  <View key={i} style={styles.listWrapper}>
                    <Text style={styles.listItemName}>{list}</Text>
                    <TouchableOpacity
                      onPress={() => setDefaultValue(i)}
                      activeOpacity={0.5}>
                      <View
                        style={[
                          styles.checkboxView,
                          defautValue == i
                            ? {backgroundColor: COLOR.mediumGreen}
                            : {},
                        ]}
                      />
                    </TouchableOpacity>
                  </View>
                );
              },
            )}
          </Card>}
        </View>
      </View>
    </View>
  );
};

export default ProductFilter;

const styles = StyleSheet.create({
  filterContainer: {
    position: 'absolute',
    zIndex: 100000,
    width: '100%',
    height: '100%',
    backgroundColor: COLOR.white,
  },
  header: {
    backgroundColor: COLOR.black,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: DeviceInfo.hp('1%'),
    paddingLeft: 10,
  },
  filterText: {
    color: COLOR.offWhite,
    fontSize: DeviceInfo.hp('2.3%'),
    fontFamily: 'Poppins-Medium',
    marginLeft: 25,
  },
  crossIcon: {
    fontSize: DeviceInfo.hp('2.5%'),
  },
  cardWrapper: {
    width: '35%',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 1,
  },
  typeText: {
    width: '98%',
    fontFamily: 'Raleway-Medium',
  },
  typeView: {
    width: '100%',
    paddingVertical: 11,
    paddingLeft: 15,
  },
  listContainer: {
  },
  handleBtns: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1000,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: 'transparent',
    shadowOpacity: 0,
    paddingHorizontal: 6,
    width: '100%',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0,
    borderWidth: 1,
  },
  resetView: {
    width: '100%',
    borderWidth: 2,
    borderColor: COLOR.mediumGreen,
    alignItems: 'center',
    padding: 10,
    paddingBottom: 6,
    borderRadius: 5,
  },
  resetText: {
    color: COLOR.mediumGreen,
    fontFamily: 'Poppins-Medium',
    fontSize: DeviceInfo.hp('1.7%'),
  },
  applyText: {
    color: COLOR.white,
    fontFamily: 'Poppins-Medium',
    fontSize: DeviceInfo.hp('1.7%'),
  },
  applyView: {
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: COLOR.mediumGreen,
    padding: 10,
    paddingBottom: 6,
    backgroundColor: COLOR.mediumGreen,
  },
  lastItem: {
    borderBottomWidth: 1,
  },
  underLine: {
    width: '100%',
    marginTop: DeviceInfo.hp('4%'),
    backgroundColor: COLOR.white,
  },
  checkboxView: {
    width: DeviceInfo.width * 0.05,
    height: DeviceInfo.width * 0.05,
    borderWidth: 3.5,
    borderColor: 'rgba(0,0,0,.5)',
    borderRadius: (DeviceInfo.width * 0.1) / 2,
  },
  filterOptions: {
    position: 'absolute',
    right: 0,
    width: '63%',
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 10, height: -1},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 2,
  },
  listWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: DeviceInfo.hp('1%'),
  },
  listItemName: {
    fontFamily: 'Poppins-Medium',
    fontSize: DeviceInfo.hp('1.6%'),
  },
});
