import React from 'react';
import { Text, View , ImageBackground,StyleSheet} from 'react-native';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';
import AppLogo from '../generic/AppLogo';
import GenericButton from '../generic/GenericButton';

const AppLoyaltyCard = ({navigation})=>{
    return(
        <View>
            <ImageBackground 
                resizeMode="cover" 
                style={styles.bgImg} 
                source={require('../../assets/WELCOME__APPLY.png')}
            >
                <View style={styles.overlay}>
                    <AppLogo
                        style={{paddingVertical:DeviceInfo.hp("5.6%")}}
                    />
                    <Text style={styles.cardText}>
                        Thanks for your loyalty card application. We will process your details and confirm your membership number within 1-2 working days
                    </Text>
                    <GenericButton
                        text="Go to home"
                        style={styles.genericBtn}
                        onPress={()=>navigation.navigate("MemberBenefits")}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

export default AppLoyaltyCard;


const styles = StyleSheet.create({
    bgImg:{
        width:"100%",
        height:"100%",
    },
    overlay:{
        backgroundColor:COLOR.overlay,
        flex:1
    },
    cardText:{
        color:COLOR.white,
        fontFamily:"Poppins-Medium",
        width:"78%",
        alignSelf:'center',
        textAlign:'center',
        marginTop:DeviceInfo.pixel(20)
    },
    genericBtn:{
        marginTop:DeviceInfo.pixel(22)
    }
})