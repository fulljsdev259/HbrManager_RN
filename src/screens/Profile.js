import React, {useState} from 'react';
import {Text, View, ScrollView, StyleSheet, TextInput, TouchableOpacity, Platform} from 'react-native';
import AppLogo from '../generic/AppLogo';
import GenericButton from '../generic/GenericButton';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';
// https://i.diawi.com/eCsESf
const Profile = ({navigation}) => {
    const [isEdit , setEdit] = useState(false)
    function handleEdit(){
        setEdit(!isEdit)
    }
  return (
    <View style={styles.container}>
      <ScrollView>
        <AppLogo
          text1={isEdit ? "Edit profile" :"Profile"}
          style={{
            paddingTop: DeviceInfo.hp('7%'),
            paddingBottom: DeviceInfo.hp('3%'),
          }}
        />
        <View style={styles.inputContainer}>
          <View style={[styles.inputWrapper, {marginTop: 0}]}>
            <Text style={styles.fieldName}>Patient No : </Text>
            <TextInput
              style={styles.textInput}
              placeholder="1876746578"
              placeholderTextColor={COLOR.white}
            />
            {isEdit &&<View style={[styles.editView, Platform.OS === 'ios' && styles.bottom ]}>
              <TouchableOpacity activeOpacity={.5}>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
            </View>}
          </View>
          <View style={[styles.inputWrapper]}>
            <Text style={styles.fieldName}>Name : </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Johan Hausenburg"
              placeholderTextColor={COLOR.white}
            />
            {isEdit &&
            <View style={[styles.editView, Platform.OS === 'ios' && styles.bottom ]}>
              <TouchableOpacity activeOpacity={.5}>
                  <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
            </View>}
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.fieldName}>Phone : </Text>
            <TextInput
              style={styles.textInput}
              placeholder="07766545434"
              placeholderTextColor={COLOR.white}
            />
            {isEdit &&
            <View style={[styles.editView, Platform.OS === 'ios' && styles.bottom ]}>
              <TouchableOpacity activeOpacity={.5}>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
            </View>}
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.fieldName}>Email : </Text>
            <TextInput
              style={styles.textInput}
              placeholder="johan@gmail.com"
              placeholderTextColor={COLOR.white}
            />
            {isEdit &&<View style={[styles.editView, Platform.OS === 'ios' && styles.bottom ]}>
              <TouchableOpacity activeOpacity={.5}>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
            </View>}
          </View>
        </View>
        {!isEdit && 
        <>
        <GenericButton
          style={styles.genericBtn}
          text="Change Password"
          onPress={() => navigation.navigate('ApplyForLc', {isToChangePassword:true})}
        />
        <GenericButton
          style={styles.genericBtn}
          text="Recent Orders"
          onPress={() => navigation.navigate('RecentOrders')}
        />
        </>}
        <GenericButton
          style={styles.genericBtn}
          text={isEdit ? "Save & update" : "Edit"}
          onPress={() => handleEdit()}
        />
        {!isEdit && <GenericButton
          style={styles.genericBtn}
          text="Log Out"
          bgColor={COLOR.darkGreen}
          onPress={() => navigation.navigate('SignIn')}
        />}
        <View
          style={{paddingBottom: DeviceInfo.isSmall ? DeviceInfo.hp('8%') : 10}}
        />
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.blackBg,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: DeviceInfo.hp('1.1%'),
    width: '70%',
    alignSelf: 'center',
    borderBottomWidth: 1.2,
    borderBottomColor: COLOR.yellow,
    paddingBottom: 10,
  },
  textInput: {
    width: '100%',
    padding: 0,
    margin: 0,
    color: COLOR.white,
    fontFamily: 'Raleway-Medium',
    fontSize: DeviceInfo.hp('1.6%'),
  },
  inputContainer: {
    marginBottom: DeviceInfo.hp('3%'),
  },
  fieldName: {
    color: COLOR.white,
    fontFamily: 'Raleway-Bold',
    fontSize: DeviceInfo.hp('1.6%'),
  },
  genericBtn: {
    marginTop: 10,
  },
  editView: {
    position: 'absolute',
    right: 0,
    alignItems:'center',
    flexDirection:'column',
    height:"100%", 
  },
  bottom:{
    bottom:10 
  },
  editText: {
    color: COLOR.yellow,
    fontFamily: 'Raleway-Medium',
    fontSize: DeviceInfo.hp('1.5%'),
  },
});
