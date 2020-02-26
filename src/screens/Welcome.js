import React, { Component } from 'react'
import { Text, View , TouchableOpacity,Image, StyleSheet, ScrollView, PixelRatio} from 'react-native';
import AppLogo from '../generic/AppLogo';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';


const loyaltyCard = [
    {
        "name":"Account",
        "img":require("../../assets/APPLY_FOR_LOYALTY_CARD.png"),
        navigateTo:'ApplyOrSignin'
    },
    {
        "name":"Members Benefits",
        "img":require("../../assets/PROFILE_PAGE.png"),
        navigateTo:'MemberBenefits'
    },
    {
        "name":"Book An Appointment",
        "img":require("../../assets/SIGN_IN_AND_APPLY_PAGE_APPOINT.png"),
        navigateTo:'BookAppointment'
    },
    {
        "name":"Order Contact Lenses",
        "img":require("../../assets/BOOK_APPOINTMENT.png"),
        navigateTo:'ProductCategory'
    },
    {
        "name":"Get Loyalty Card",
        "img":require("../../assets/CONTACT_LENSE_PAGE.png"),
        navigateTo:'ApplyForLc'
    },
    {
        "name":"Frames of the Moment",
        "img":require("../../assets/WELCOME_MESSAGE_AFTER_APPLY.png"),
        navigateTo:'OderContactLens'
    },
]

const Welcome = ({navigation})=>{
    console.log(DeviceInfo,'DeviceInfo');
    
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
                                <TouchableOpacity onPress={()=>navigation.navigate(list.navigateTo)} activeOpacity={.5}>
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
        width:DeviceInfo.wp("74%"),
        alignItems:'center',
        justifyContent:"space-between"
    },
    card:{
        width:"48%",
        height:DeviceInfo.hp("17.5%"),
        marginBottom:7,
        // borderRadius:10
    },
    cardContainer:{
        flexDirection:'row',
        justifyContent:'center',
        paddingBottom:DeviceInfo.isSmall ?  DeviceInfo.hp("8%") : 10
    },
    cardImg:{
        width:'100%',
        height:"100%",
        borderRadius:10
    },
    cardName:{
        color:COLOR.white,
        width:"90%",
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