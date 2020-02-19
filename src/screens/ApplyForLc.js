import React, { Component } from 'react';
import { Text, View ,Image, StyleSheet,ScrollView, PixelRatio} from 'react-native';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';
import AppLogo from '../generic/AppLogo';
import GenericTextInput from '../generic/GenericTextInput';
import GenericButton from '../generic/GenericButton';


const textFeild = ["Patient number", "Black or teal card", "First name", "Last name", "Phone number", "Email", "Repeat email", "Password", "Repeat password" ]

const ApplyForLc = ({navigation})=>{
    return(
        <View style={styles.container}>
            <ScrollView>
                <AppLogo
                    text1="Apply for a"
                    text2="loyalty card"
                    style={{paddingTop:DeviceInfo.hp("7%"), paddingBottom:DeviceInfo.hp("4%")}}
                />
                {
                    textFeild.map((item)=>{
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
        backgroundColor:'rgba(67,68,69,.4)'
    }
})