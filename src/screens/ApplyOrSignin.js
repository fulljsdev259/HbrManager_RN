import React, { Component } from 'react'
import { Text, View , ImageBackground, StyleSheet} from 'react-native';
import AppLogo from '../generic/AppLogo';
import GenericButton from '../generic/GenericButton';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';

const ApplyOrSignin = ({navigation})=>{
    return(
        <View>
            <ImageBackground 
                resizeMode="cover" 
                style={styles.bgImg} 
                source={require('../../assets/SIGN_IN_AND_APPLY_PAGE.png')}
            >
            <View style={styles.overlay}>
                <AppLogo
                    text1="Apply or sign in"
                    text2="to your account"
                    style={{paddingVertical:DeviceInfo.hp("4.5%")}}
                />
                <GenericButton
                    style={styles.genericBtn}
                    text="Sign In"
                    onPress={()=>navigation.navigate("Profile")}
                />
                <GenericButton
                    style={styles.genericBtn}
                    text="Apply"
                    onPress={()=>navigation.navigate("Profile")}
                />
                </View>
            </ImageBackground>
        </View>
    )
}

export default ApplyOrSignin;


const styles = StyleSheet.create({
    bgImg:{
        width:"100%",
        height:"100%",
    },
    genericBtn:{
        marginTop:20
    },
    overlay:{
        backgroundColor:COLOR.overlay,
        flex:1
    }
})