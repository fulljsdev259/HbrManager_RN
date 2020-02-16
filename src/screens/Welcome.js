import React, { Component } from 'react'
import { Text, View , TouchableOpacity,Image, StyleSheet, ScrollView} from 'react-native';
import AppLogo from '../generic/AppLogo';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';


const loyaltyCard = [
    {
        "name":"Account",
        "img":require("../../assets/APPLY_FOR_LOYALTY_CARD.png")
    },
    {
        "name":"Members Benefits",
        "img":require("../../assets/PROFILE_PAGE.png")
    },
    {
        "name":"Book An Appointment",
        "img":require("../../assets/SIGN_IN_AND_APPLY_PAGE_APPOINT.png")
    },
    {
        "name":"Order Contact Lenses",
        "img":require("../../assets/BOOK_APPOINTMENT.png")
    },
    {
        "name":"Get Loyalty Card",
        "img":require("../../assets/CONTACT_LENSE_PAGE.png")
    },
    {
        "name":"Frames of the Moment",
        "img":require("../../assets/WELCOME_MESSAGE_AFTER_APPLY.png")
    },
]

const Welcome = ({navigation})=>{
    return(
        
        <View style={styles.container}>
            <ScrollView>
            <AppLogo
                text1="Welcome to the"
                text2="Loyalty Card App"
            />
            <View style={styles.cardContainer}>
                <View style={styles.cardWrapper}>
                    {loyaltyCard.map((list,i)=>{
                        return(
                            <View key={i} style={styles.card}>
                                <TouchableOpacity onPress={()=>navigation.navigate("SignIn")} activeOpacity={.5}>
                                    <View style={styles.nameView}>
                                        <Text style={styles.cardName}>{list.name}</Text>
                                    </View>
                                    <Image  source={list.img} style={styles.cardImg}   />
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </View>
            </View>
            </ScrollView>
        </View>
        
    )
}

export default Welcome;


const styles = StyleSheet.create({
    bgImg:{
        width:"100%",
        height:"100%",
        opacity:.6,
    },
    container:{
        backgroundColor:COLOR.blackBg,
        flex:1,
        // paddingBottom:DeviceInfo.width*.3
    },
    cardWrapper:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:"80%",
        alignItems:'center',
        justifyContent:"space-between"
    },
    card:{
        width:"48%",
        height:DeviceInfo.width*.4,
        marginBottom:15
    },
    cardContainer:{
        flexDirection:'row',
        justifyContent:'center',
        paddingBottom:DeviceInfo.width*.3
    },
    cardImg:{
        width:'100%',
        height:"100%"
    },
    cardName:{
        color:COLOR.white,
        width:"80%",
        fontFamily:'Poppins-Medium'
    },
    nameView:{
        position:'absolute',
        zIndex:100,
        height:'100%',
        width:'100%',
        paddingLeft:10,
        flexDirection:'column',
        justifyContent:'flex-end'
    }
})