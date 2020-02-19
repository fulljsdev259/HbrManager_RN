import React, { Component } from 'react'
import { Text, View , ImageBackground, StyleSheet, Image,   TouchableOpacity} from 'react-native';
import AppLogo from '../generic/AppLogo';
import COLOR from '../utiles/color';
import Icon from 'react-native-vector-icons/AntDesign';
import DeviceInfo from '../utiles/deviceInfo';

const Footer = ({})=>{
    return(
        <View style={styles.footer}>
        <TouchableOpacity activeOpacity={.5}>
          <View style={styles.imgView}>
            <Image resizeMode="center" style={styles.img} source={require("../../assets/footer/Group_38.png")} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={.5}>
          <View style={styles.imgView}>
            <Image resizeMode="center" style={styles.img} source={require("../../assets/footer/Group_35.png")} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={.5}>
          <View style={styles.imgView}>
            <Image resizeMode="center" style={styles.img} source={require("../../assets/footer/Group_36.png")} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={.5}>
          <View style={styles.imgView}>
            <Image resizeMode="center" style={styles.img} source={require("../../assets/footer/Group_67.png")} />
          </View>
        </TouchableOpacity>
    </View>
    )
}

export default Footer;


const styles = StyleSheet.create({
    imgView:{
        width:DeviceInfo.wp("6%"),
        height:DeviceInfo.wp("6%")
      },
      img:{
        width:'100%',
        height:"100%"
      },
      footer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor:COLOR.darkGreen,
        paddingVertical:15,
      }
})