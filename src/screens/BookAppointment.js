import React from 'react';
import { Text, View ,Image, StyleSheet, PixelRatio} from 'react-native';
import COLOR from '../utiles/color';
import DeviceInfo from '../utiles/deviceInfo';
import AppLogo from '../generic/AppLogo';

const BookAppointment = ({text1, text2, style})=>{
    return(
        <View>
            <AppLogo
                text1="Book Appointment"
                logoBg={COLOR.blackBg}
                textStyle={{color:COLOR.black}}
            />
        </View>
    )
}

export default BookAppointment;


const styles = StyleSheet.create({
    
})