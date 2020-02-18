import React, { Component } from 'react'
import { Text, View , ImageBackground, StyleSheet} from 'react-native';
import AppLogo from '../generic/AppLogo';
import GenericButton from '../generic/GenericButton';

const Welcome = ({navigation})=>{
    return(
        <View>
            <ImageBackground 
                resizeMode="cover" 
                style={styles.bgImg} 
                source={require('../../assets/SIGN_IN_AND_APPLY_PAGE.png')}
            >
            <View style={{backgroundColor:'rgba(000, 000, 000, 0.6)',flex:1}}>
                <AppLogo
                    text1="Apply or sign in"
                    text2="to your account"
                    style={{paddingVertical:40}}
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

export default Welcome;


const styles = StyleSheet.create({
    bgImg:{
        width:"100%",
        height:"100%",
    },
    genericBtn:{
        marginTop:20
    }
})