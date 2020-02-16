import React, { Component } from 'react'
import { Text, View , ImageBackground, StyleSheet, Image,   TouchableOpacity} from 'react-native';
import AppLogo from '../generic/AppLogo';
import COLOR from '../utiles/color';
import Icon from 'react-native-vector-icons/AntDesign';

const GenericButton = ({text, style, bgColor, onPress})=>{
    return(
        <TouchableOpacity onPress={() => {onPress ? onPress() : null}} activeOpacity={.5}>
            <View style={[styles.wrapper,{...style}]}>
                <View style={[styles.btnView,{backgroundColor:bgColor ? bgColor : COLOR.yellow}]}>
                    <Text style={styles.btnText}>{text}</Text>
                    <View style={styles.btnArrow}>
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
        paddingVertical:15,
        fontFamily:"Raleway-Medium",
        color:COLOR.white
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
})