import React, { Component } from 'react';
import { Text, View ,Image, StyleSheet, PixelRatio} from 'react-native';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';

const AppLogo = ({text1, text2, style})=>{
    return(
        <View>
            <View style={styles.applogoView}>
                <View style={styles.applogoWrapper}>
                    <Image 
                        style={styles.applogo}
                        resizeMode="contain" 
                        source={require('../../assets/applogo.png')}
                    />
                </View>
            </View>
            <View>
                <View style={styles.yellowLine} />
                <View style={styles.greenLine}/>
                <View style={styles.yellowLine}/>
            </View>
            <View style={[style ? {...style} : styles.textContainer,]}>
                {text1 && <Text style={styles.text}>{text1}</Text>}
                {text2 &&<Text style={[styles.text,{marginTop:-10}]}>{text2}</Text>}
            </View>
        </View>
    )
}

export default AppLogo;


const styles = StyleSheet.create({
    applogo:{
        width:"100%",
        height:"100%"
    },
    applogoWrapper:{
        width:"45%",
        height:DeviceInfo.pixel(33),
    },
    applogoView:{
        flexDirection:"row",
        justifyContent:'center',
        paddingTop:25,
        paddingBottom:20,
    },
    yellowLine:{
        height:1.2,
        width:"100%",
        backgroundColor:COLOR.yellow,
        marginTop:2
    },
    greenLine:{
        height:1.2,
        width:"100%",
        backgroundColor:COLOR.darkGreen,
        marginTop:2
    },
    textContainer:{
        paddingVertical:30
    },
    text:{
        color:COLOR.white,
        textAlign:'center',
        fontSize:DeviceInfo.pixel(7.5),
        fontFamily:'Poppins-Medium'
    },
})