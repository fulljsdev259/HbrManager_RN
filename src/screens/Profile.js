import React from 'react'
import { Text, View ,ScrollView, StyleSheet, TextInput} from 'react-native';
import AppLogo from '../generic/AppLogo';
import GenericButton from '../generic/GenericButton';
import COLOR from '../utiles/color';

const Profile = ({navigation})=>{
    return(
        <View style={styles.container}>
            <ScrollView>
                <AppLogo
                    text1="Profile"
                    style={{paddingTop:60, paddingBottom:40}}
                />
                <View style={styles.inputContainer}>
                    <View style={[styles.inputWrapper,{marginTop:0}]}>
                        <Text style={styles.fieldName}>Patient No : </Text>
                        <TextInput
                        style={styles.textInput}
                            placeholder="1876746578"
                            placeholderTextColor={COLOR.white}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.fieldName}>Name : </Text>
                        <TextInput
                        style={styles.textInput}
                            placeholder="Johan Hausenburg"
                            placeholderTextColor={COLOR.white}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.fieldName}>Phone : </Text>
                        <TextInput
                        style={styles.textInput}
                            placeholder="07766545434"
                            placeholderTextColor={COLOR.white}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.fieldName}>Email : </Text>
                        <TextInput
                        style={styles.textInput}
                            placeholder="johan@gmail.com"
                            placeholderTextColor={COLOR.white}
                        />
                    </View>
                </View>
                <GenericButton
                    style={styles.genericBtn} 
                    text="Change Password"
                    onPress={()=>navigation.navigate("SignIn")}
                />
                <GenericButton 
                    style={styles.genericBtn} 
                    text="Recent Orders"
                    onPress={()=>navigation.navigate("SignIn")}
                />
                <GenericButton 
                    style={styles.genericBtn} 
                    text="Edit"
                    onPress={()=>navigation.navigate("SignIn")}
                />
                <GenericButton 
                    style={styles.genericBtn} 
                    text="Log Out"
                    bgColor={COLOR.darkGreen}
                    onPress={()=>navigation.navigate("SignIn")}
                />
            </ScrollView>
        </View>
        
    )
}

export default Profile;


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLOR.blackBg
    },
    inputWrapper:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        width:'70%',
        alignSelf:'center',
        borderBottomWidth:2,
        borderBottomColor:COLOR.yellow,
        paddingBottom:10
    },
    textInput:{
        width:"100%",
        padding:0,
        margin:0,
        color:COLOR.white,
        fontFamily:'Raleway-Medium',
    },
    inputContainer:{
        marginBottom:25
    },
    fieldName:{
        color:COLOR.white,
        fontFamily:'Raleway-Medium'
    },
    genericBtn:{
        marginTop:10
    }
})