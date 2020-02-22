import React, { Component } from 'react'
import { Text, View , ImageBackground, StyleSheet, Image,   TouchableOpacity} from 'react-native';
import AppLogo from '../generic/AppLogo';
import COLOR from '../utiles/color';
import Icon from 'react-native-vector-icons/AntDesign';
import DeviceInfo from '../utiles/deviceInfo';

const GenericButton = ({text, style, bgColor,btnViewStyle, onPress, type, textStyle})=>{
    return(
        <TouchableOpacity onPress={() => {onPress ? onPress() : null}} activeOpacity={.5}>
            <View style={[styles.wrapper,{...style}]}>
                <View 
                style={[
                    styles.btnView,type ? {paddingHorizontal:20} : {}, 
                    {justifyContent:type ? "space-between" : "center" },
                    {backgroundColor:bgColor ? bgColor : COLOR.yellow},
                    {...btnViewStyle}
                ]}>
                    {type &&
                        <View style={styles.iconView}>
                            <Image resizeMode="contain" style={styles.img} source={type === "fb"  ? require('../../assets/facebook-icon.png') : require('../../assets/google.png')}   />
                        </View>
                    }
                    <Text 
                        style={[
                            styles.btnText,
                            {...textStyle},
                            { color : type ? COLOR.black : COLOR.white}
                        ]}>
                        {text}
                    </Text>
                    <View style={[type ? styles.btnArrowWithType :styles.btnArrow]}>
                        <Icon size={25} name='arrowright' />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default GenericButton;


const styles = StyleSheet.create({
    btnText:{
        paddingVertical:DeviceInfo.hp("1.5%"),
        fontFamily:"Raleway-Medium",
        fontSize:DeviceInfo.hp("1.5%")
        
    },
    btnView:{
        backgroundColor:COLOR.yellow,
        width:"80%",
        borderRadius:60,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    wrapper:{
        flexDirection:'row',
        justifyContent:'center'
    },
    btnArrow:{
        position:"absolute",
        width:"100%",
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingRight:20
    },
    btnArrowWithType:{

    }
    ,iconView:{
        width:DeviceInfo.pixel(10),
        height:DeviceInfo.pixel(10)
    },
    img:{
        width:"100%",
        height:'100%'
    }
})