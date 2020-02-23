import React, { Component } from 'react';
import { Text, View ,Image, StyleSheet,TextInput, PixelRatio} from 'react-native';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';

const GenericTextInput = ({style, placeholder,type, placeholderTextColor})=>{
    return(
        <View style={styles.wrapper}>
            <TextInput 
                multiline={type ? true : false}
                numberOfLines={4}
                placeholder={placeholder ? placeholder :''}
                style={[styles.input,{...style},type && styles.textArea]}
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
        paddingHorizontal:20,
        height:DeviceInfo.hp("5.1%"),
        color:COLOR.white,
        fontSize:DeviceInfo.hp("1.5%")
    },
    wrapper:{
        width:"80%",
        alignSelf:'center'
    },
    textArea:{
        height:150,
        borderRadius:20,
        textAlignVertical:'top',
        paddingTop:20
    }
})
