import React, { Component } from 'react';
import { Text, View ,Image, StyleSheet,TextInput, PixelRatio} from 'react-native';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';

const GenericTextInput = ({style, placeholder, placeholderTextColor})=>{
    return(
        <View style={styles.wrapper}>
            <TextInput 
                placeholder={placeholder ? placeholder :''}
                style={[styles.input,{...style}]}
                placeholderTextColor={placeholderTextColor ? placeholderTextColor : '#fff'}
            />
        </View>
    )
}

export default GenericTextInput;


const styles = StyleSheet.create({
    input:{
        backgroundColor:COLOR.textFieldBg,
        marginBottom:DeviceInfo.hp("1.5%"),
        borderRadius:30,
        width:"100%",
        paddingHorizontal:20
    },
    wrapper:{
        width:"80%",
        alignSelf:'center'
    }
})