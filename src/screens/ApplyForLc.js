import React, { Component } from 'react';
import { Text, View ,Image, StyleSheet,ScrollView, PixelRatio} from 'react-native';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';
import AppLogo from '../generic/AppLogo';
import GenericTextInput from '../generic/GenericTextInput';
import GenericButton from '../generic/GenericButton';


const textFeild = ["Patient number", "Black or teal card", "First name", "Last name", "Phone number", "Email", "Repeat email", "Password", "Repeat password" ]
const changePassword = ['New password', 'Confirm password']
const ApplyForLc = ({route,navigation})=>{

    const isToChangePassword = route.params && route.params && route.params.isToChangePassword
    const feildsToRender = isToChangePassword ? changePassword : textFeild;
    return(
        <View style={styles.container}>
            <ScrollView>
                <AppLogo
                    text1={isToChangePassword ? "Change password" : "Apply for a"}
                    text2={isToChangePassword ? " " : "loyalty card"}
                    style={{paddingTop:DeviceInfo.hp("7%"), paddingBottom:DeviceInfo.hp("4%")}}
                />
                {
                    feildsToRender.map((item)=>{
                        return(
                            <GenericTextInput
                                placeholder={item}
                                style={styles.input}
                            />
                        )
                    })
                }
                <GenericButton
                    text="Submit"
                    style={styles.genericBtn}
                    onPress={()=>navigation.navigate("AppLoyaltyCard")}
                />
                
            </ScrollView>
        </View>
    )
}

export default ApplyForLc;


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLOR.blackBg
    },
    genericBtn:{
        marginTop:DeviceInfo.hp("3.2%"),
        marginBottom:DeviceInfo.hp("9%")
    },
    input:{
        backgroundColor:'rgba(67,68,69,.4)',
        fontSize:DeviceInfo.hp("1.6%"),
        color:COLOR.white
    }
})