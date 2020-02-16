import React, { Component } from 'react';
import { Text, View ,Image, StyleSheet} from 'react-native';
import COLOR from '../utiles/color';

const AppLogo = ({text1, text2})=>{
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
            <View style={styles.textContainer}>
                {text1 && <Text style={styles.text}>{text1}</Text>}
                {text2 &&<Text style={styles.text}>{text2}</Text>}
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
        height:120,
    },
    applogoView:{
        flexDirection:"row",
        justifyContent:'center',
        paddingTop:25,
        paddingBottom:20,
    },
    yellowLine:{
        height:1.4,
        width:"100%",
        backgroundColor:COLOR.yellow,
        marginTop:2
    },
    greenLine:{
        height:1.4,
        width:"100%",
        backgroundColor:COLOR.darkGreen,
        marginTop:2
    },
    textContainer:{
        paddingVertical:50
    },
    text:{
        color:COLOR.white,
        textAlign:'center',
        fontSize:20,
        fontFamily:'Poppins-Medium'
    },
})