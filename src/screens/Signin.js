import React, { Component } from 'react';
import { Text, View ,Image, StyleSheet,ImageBackground, PixelRatio, ScrollView} from 'react-native';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';
import AppLogo from '../generic/AppLogo';
import GenericTextInput from '../generic/GenericTextInput';
import GenericButton from '../generic/GenericButton';

const SignIn = ({navigation})=>{
    return(
        <View>
            <ImageBackground 
                resizeMode="cover" 
                style={styles.bgImg} 
                source={require('../../assets/SIGN_INTO_ACCOUNT.png')}
            >
                <View style={styles.overlay}>
                    <ScrollView>
                        <AppLogo
                            text1="Sign in to"
                            text2="your account"
                            style={{paddingTop:DeviceInfo.hp("7%"), paddingBottom:DeviceInfo.hp("4%")}}
                        />
                        <View style={styles.wrapper}>
                            <GenericTextInput
                                placeholder="Email"
                                
                            />
                            <GenericTextInput
                                placeholder="Password"
                            />
                            <GenericButton 
                                text="Sign In"
                                style={styles.genericBtn}
                                onPress={()=>navigation.navigate("ApplyForLc")}
                            />
                            <GenericButton 
                                text="Continue with Google"
                                type="google"
                                style={{marginTop :DeviceInfo.pixel(22)}}
                                onPress={()=>navigation.navigate("SocilLogin",{socialLogin:'google'})}
                                bgColor={COLOR.white}
                            />
                            <GenericButton 
                                text="Continue with Facebook"
                                type="fb"
                                style={styles.genericBtn}
                                onPress={()=>navigation.navigate("SocilLogin",{socialLogin:'fb'})}
                                bgColor={COLOR.white}
                            />
                        </View>
                        <View style={{ paddingBottom:DeviceInfo.isSmall ?  DeviceInfo.hp("8%") : 10}} />
                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
    )
}

export default SignIn;


const styles = StyleSheet.create({
    bgImg:{
        width:'100%',
        height:"100%"
    },
    overlay:{
        backgroundColor:COLOR.overlay,
        flex:1
    },
    wrapper:{
    },
    genericBtn:{
        marginTop:DeviceInfo.hp("1.6%")
    }
})