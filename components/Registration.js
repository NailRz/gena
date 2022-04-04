import { StyleSheet, Text, View, Dimensions, Image, viewBox , SafeAreaView, TouchableOpacity, VirtualizedList, TextInput, Pressable } from 'react-native';
import colors from '../assets/colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Svg from 'react-native-svg';
// fonts
import AppLoading from 'expo-app-loading';
import React, {useState} from 'react';
import { useFonts } from '@expo-google-fonts/inter';  
import * as Animatable from 'react-native-animatable';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const defaultWidth = 390;
const defaultHeight = 844;
const coefficientWidth = screenWidth/defaultWidth;
const coefficientHeight = screenHeight/defaultHeight;


import WhiteWaveBg from '../assets/images/WhiteWaveBg';
import ArrowBack from '../assets/images/ArrowBack';
import UrnaWelcome from '../assets/images/UrnaWelcome';
import Or from '../assets/images/Or';
import WaveGreen from '../assets/images/WaveGreen';
import GoogleIcon from '../assets/images/GoogleIcon';
import VkIcon from '../assets/images/VkIcon';
import FacebookIcon from '../assets/images/FacebookIcon';
import useTogglePasswordVisibility  from './useTogglePasswordVisibility';

import GetIn from './GetIn';
import ForgotPass from './ForgotPass';
import Authentification from './Authentification';

export default function Regisrtation ({navigation}) {
    const Back = () => {
        navigation.navigate('GetIn');}
    const onLogin = () => {
        navigation.navigate('Authentification');}
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
        useTogglePasswordVisibility();
    let [fontsLoaded] = useFonts({
            'mt-bold': require('../assets/fonts/SFUIDisplayBold.ttf'),
            'mt-semiBold': require('../assets/fonts/SFUIDisplaySemiBold.ttf'),
            'mt-regular': require('../assets/fonts/SFUIDisplayRegular.ttf'),
            'kr-regular': require('../assets/fonts/SFUIDisplayKronaRegular.ttf'),
            'verdana-regular': require('../assets/fonts/Verdana.ttf'),
            'verdana-bold': require('../assets/fonts/Verdana-Bold.ttf'),
          });
    if (!fontsLoaded) {
            return <AppLoading />;
    }else {
        return(
            <SafeAreaView style = {styles.container}>
                {/* ArrowBack */}
                <Animatable.View animation="fadeIn">
                <TouchableOpacity onPress = {Back}>
                    <ArrowBack style = {styles.ArrowBack}></ArrowBack>
                </TouchableOpacity>
                </Animatable.View>
                {/* UrnaWelcome */}
                <Animatable.View animation="fadeIn">
                <UrnaWelcome style = {styles.UrnaWelcome}> </UrnaWelcome>
                </Animatable.View>
                {/* WaveBg */}
                <View style = {styles.WrapperWhiteWaveBg}>
                    <WaveGreen style = {styles.WaveGreen}></WaveGreen>
                    {/* CreateAcc Text */}
                    <Animatable.View animation="fadeIn">
                    <Text style = {styles.textCreateAccImport}>Создайте аккаунт</Text>
                    {/* Inputs */}
                    <View style = {styles.inputsWrapper}>
                        {/* LoginInput */}
                        <View style = {styles.loginButtonWrapper} >
                            <View style = {styles.loginButtonBackground}>
                                <TextInput style = {styles.inputButtonText}
                                    placeholder="Ivan"
                                />
                                {/* <Text style = {styles.loginButtonText}> Ivan </Text> */}
                            </View>
                        </View>
                        {/* EmailInput */}
                        <View style = {styles.emailButtonWrapper} >
                            <View style = {styles.emailButtonBackground}>
                                <TextInput style = {styles.inputButtonText}
                                    placeholder="Ivan@mail.com"
                                />
                                {/* <Text style = {styles.emailButtonText}> Ivan@mail.com </Text> */}
                            </View>
                        </View>
                        {/* PassInput */}
                        <View style = {styles.passInputButtonWrapper} >
                            <View style = {styles.passInputButtonBackground}>
                                <TextInput style = {styles.passInputButtonInput}
                                    placeholder="•••"
                                    secureTextEntry={passwordVisibility}/>
                                <Pressable onPress={handlePasswordVisibility}>
                                    <MaterialCommunityIcons name={rightIcon} size={27 * coefficientHeight} style = {styles.eyeStyle} />
                                </Pressable>
                                {/* <Text style = {styles.passInputButtonText}> tochki </Text> */}
                            </View>
                        </View>
                    </View>
                    {/* RegButton */}
                    <View style = {styles.vhodButtonWrapper} >
                        <View style = {styles.vhodButtonBackground}>
                            <Text style = {styles.vhodButtonText}> Зарегистрироваться </Text>
                        </View>
                    </View>
                    {/* OOORRR */}
                    <Or style = {styles.ORView}></Or>
                    {/* Vk fb gl */}
                     <View style = {styles.socialWrapper}>
                        <GoogleIcon style = {styles.socialGoogle}></GoogleIcon>
                        <VkIcon style = {styles.socialVk}></VkIcon>
                        <FacebookIcon style = {styles.socialFacebook}></FacebookIcon>
                    </View>
                    <Text style = {styles.RegYetText}>Уже зарегистрированны?</Text>
                    {/* LoginAccText */}
                    <TouchableOpacity onPress = {onLogin}>
                    <Text style = {styles.LoginAccText}>Войдите в аккаунт</Text>
                    </TouchableOpacity>
                    </Animatable.View>
                </View>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create(
{
    container:{
        backgroundColor: colors.backgroundGr,
        width: screenWidth,
        height:screenHeight,
    },
    ArrowBack:{
        alignSelf: 'flex-start',
        marginTop: 40*coefficientHeight,
        marginLeft: 20*coefficientWidth,
        width:17.5*coefficientWidth,
        height:28*coefficientHeight,
        
    },
    UrnaWelcome:{
        // alignSelf: 'center',
        marginLeft: 26*coefficientHeight,
        height: 115* coefficientHeight,
        width: 298  * coefficientWidth,  
        marginTop: 20*coefficientHeight,
        // margin: screenHeight * 0.031 
        // flex: 0.28,
    },
    WaveGreen:{
        height: screenHeight * 0.08,//87* coefficientHeight,
        width: screenWidth,   
        alignSelf: 'center',
        // paddingTop:216*coefficientHeight,
        // paddingTop:100*coefficientHeight,
        position: 'absolute',
    },
    WrapperWhiteWaveBg:{
        position: 'absolute',
        marginTop: 216*coefficientHeight,
        width: 390*coefficientWidth,
        height: 628*coefficientHeight,
        backgroundColor: colors.backgroundWh,
    },
    textCreateAccImport:{
        fontFamily: 'mt-bold',
        color: colors.blackText,
        alignSelf: 'center',
        fontSize: 25*coefficientHeight,
        marginTop: 80 *coefficientHeight,
    },
    inputsWrapper:{
        paddingTop:coefficientHeight* 35,
        width:coefficientHeight* 323,
        alignSelf: 'center',
    },
    loginButtonWrapper:{
        
        alignSelf: 'center',
    },
    loginButtonBackground:{
        backgroundColor: colors.backgroundWh,
        height:coefficientHeight* 58,
        width:coefficientWidth* 323,
        borderRadius:50,
        alignSelf: 'center',
        borderColor: colors.grayLight,
        borderWidth:2,
    },
    inputButtonText:{
        height:coefficientHeight* 52,
        width:coefficientWidth* 320,
        borderRadius:50,
        fontFamily: 'mt-regular',
        alignSelf: 'flex-start',
        marginLeft:1*coefficientWidth,
        padding: 17 * coefficientWidth,
        marginTop: coefficientHeight* 1,
        fontSize: 20*coefficientHeight,
        // placeholderTextColor: colors.grayLight,
        color: colors.grayDark,
    },
    loginButtonText:{
        fontFamily: 'mt-regular',
        alignSelf: 'flex-start',
        marginLeft:20*coefficientWidth,
        marginTop: coefficientHeight* 17,
        fontSize: 18*coefficientHeight,
        color: colors.grayLight,
    },
    emailButtonWrapper:{
        marginTop: 17*coefficientHeight,
        alignSelf: 'center',
    },
    emailButtonBackground:{
        backgroundColor: colors.backgroundWh,
        height:coefficientHeight* 58,
        width:coefficientWidth* 323,
        borderRadius:50,
        alignSelf: 'center',
        borderColor: colors.grayLight,
        borderWidth:2,
    },
    emailButtonText:{
        fontFamily: 'mt-regular',
        alignSelf: 'flex-start',
        marginLeft:20*coefficientWidth,
        marginTop: coefficientHeight* 17,
        fontSize: 18*coefficientHeight,
        color: colors.grayLight,
    },
    passInputButtonWrapper:{
        marginTop: 17*coefficientHeight,
        alignSelf: 'center',
    },
    passInputButtonBackground:{
        backgroundColor: colors.backgroundWh,
        height:coefficientHeight* 58,
        width:coefficientWidth* 323,
        borderRadius:50,
        alignSelf: 'center',
        borderColor: colors.grayLight,
        borderWidth:2,
        flexDirection: 'row',
        // backgroundColor: colors.backgroundGr,
    },
    passInputButtonInput:{
        height:coefficientHeight* 52,
        width:coefficientWidth* 270,
        borderRadius:50,
        fontFamily: 'verdana-regular',
        alignSelf: 'flex-start',
        marginLeft:1*coefficientWidth,
        padding: 17 * coefficientWidth,
        marginTop: coefficientHeight* 1,
        fontSize: 20*coefficientHeight,
        // placeholderTextColor: colors.grayLight,
        color: colors.grayDark,
        
        },
    eyeStyle:{
            color: colors.grayLight,
            paddingTop: 13 * coefficientHeight,
            // paddingLeft: 6 * coefficientHeight,
            marginLeft: 6 * coefficientWidth,
            // position:'absolute',
            // alignSelf: 'flex-end',
        },
    passInputButtonText:{
        fontFamily: 'mt-regular',
        alignSelf: 'flex-start',
        marginLeft:20*coefficientWidth,
        marginTop: coefficientHeight* 17,
        fontSize: 18*coefficientHeight,
        color: colors.grayLight,
    },
    vhodButtonWrapper:{
        paddingTop:coefficientHeight* 31,
        width:coefficientHeight* 323,
        alignSelf: 'center',
    },
    vhodButtonBackground:{
        backgroundColor: colors.backgroundGr,
        height:coefficientHeight* 58,
        width:coefficientWidth* 323,
        borderRadius:50,
        alignSelf: 'center',
    },
    vhodButtonText:{
        fontFamily: 'mt-bold',
        alignSelf: 'center',
        marginTop: coefficientHeight* 14,
        fontSize: 22*coefficientHeight,
        color: 'white',
    },
    ORView:{
        height: 21*coefficientHeight,
        width: 332*coefficientWidth,
        marginVertical: 10*coefficientHeight,
        alignSelf: 'center',
    },
    socialWrapper:{
        paddingTop:18*coefficientHeight,
        flexDirection: 'row',
        marginHorizontal: '10%',   
        width: 202*coefficientWidth,
        height: 56*coefficientHeight,
        alignSelf: 'center',
        // backgroundColor: colors.backgroundGr

    },
    socialGoogle:{
        position: 'absolute',
        width: 55*coefficientWidth,
        height: 55*coefficientHeight,
        // flexDirection: 'column',
        // alignSelf: 'flex-start'
    },
    socialVk:{
        position: 'absolute',
        marginLeft: 70*coefficientWidth,
        width: 55*coefficientWidth,
        height: 55*coefficientHeight,
        // flexDirection: 'column',
        // alignSelf: 'center'
        
    },
    socialFacebook:{
        position: 'absolute',
        width: 55*coefficientWidth,
        height: 55*coefficientHeight,
        marginLeft: 140*coefficientWidth,
        // backgroundColor: colors.blackText,
        // flexDirection: 'column',
        // alignSelf:'flex-end',
    },
    RegYetText:{
        fontFamily: 'mt-regular',
        alignSelf: 'flex-start',
        paddingTop: coefficientHeight* 27,
        paddingLeft: 28*coefficientWidth,
        fontSize: 18*coefficientHeight,
        color: colors.grayLight,
        
    },
    LoginAccText:{
        fontFamily: 'mt-regular',
        alignSelf: 'flex-start',
        paddingLeft: 28*coefficientWidth,
        fontSize: 18*coefficientHeight,
        color: colors.backgroundGr,
    },
})