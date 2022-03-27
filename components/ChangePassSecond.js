import { StyleSheet, Text, View, Dimensions, Image, viewBox , SafeAreaView, TouchableOpacity, VirtualizedList, TextInput } from 'react-native';
import colors from '../assets/colors/colors';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Svg from 'react-native-svg';
// fonts
import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/inter';  
const sadjkh = 78;

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const defaultWidth = 390;
const defaultHeight = 844;
const coefficientWidth = screenWidth/defaultWidth;
const coefficientHeight = screenHeight/defaultHeight;

import ArrowBack from '../assets/images/ArrowBack';
import UrnaWelcome from '../assets/images/UrnaWelcome';
import WaveGreen from '../assets/images/WaveGreen';

export default function ChangePassSecond({navigation}) {
    const Okey = () => {
        navigation.navigate('GetIn');}
    let [fontsLoaded] = useFonts({
        'mt-bold': require('../assets/fonts/SFUIDisplayBold.ttf'),
        'mt-semiBold': require('../assets/fonts/SFUIDisplaySemiBold.ttf'),
        'mt-regular': require('../assets/fonts/SFUIDisplayRegular.ttf'),
        'kr-regular': require('../assets/fonts/SFUIDisplayKronaRegular.ttf'),
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      }else {
    return(
            <SafeAreaView style = {styles.container}>
                {/* ArrowBack */}
            {/* <ArrowBack style = {styles.ArrowBack}></ArrowBack> */}
                {/* UrnaWelcome */}
            <UrnaWelcome style = {styles.UrnaWelcome}> </UrnaWelcome>
            <View style = {styles.WrapperWhiteWaveBg}>
                <WaveGreen style = {styles.WaveGreen}></WaveGreen>
                {/* ForgotPassText */}
                <View style = {styles.CompleteChangeTextWrapper}>
                <Text style = {styles.CompleteChangeText}>Вы успешно сменили пароль!</Text>
                </View>
                {/* ForgotPassMessage */}
                <View style = {styles.WrapperCompleteChangeMessage}>
                    <Text style = {styles.CompleteChangeMessage}>Теперь вы можете использовать новый пароль для входа в учетную запись.</Text>
                </View>
                {/* SendButton */}
                <View style = {styles.SendButtonWrapper} >
                    <View style = {styles.SendButtonBackground}>
                        <TouchableOpacity onPress = {Okey}>
                            <Text style = {styles.SendButtonText}> Готово </Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
        WrapperWhiteWaveBg:{
            position: 'absolute',
            marginTop: 216*coefficientHeight,
            width: 390*coefficientWidth,
            height: 628*coefficientHeight,
            backgroundColor: colors.backgroundWh,
        },
        ArrowBack:{
            alignSelf: 'flex-start',
            marginTop: 40*coefficientHeight,
            marginLeft: 20*coefficientWidth,
            width:17.5*coefficientWidth,
            height:28*coefficientHeight,
            // fill: colors.backgroundGr,
        },
        UrnaWelcome:{
            marginLeft: 26*coefficientHeight,
            height: 115* coefficientHeight,
            width: 298  * coefficientWidth,  
            marginTop: 90*coefficientHeight,
        },
        WaveGreen:{
            // height: screenHeight * 0.08,//87* coefficientHeight,
            height: 70*coefficientHeight,
            // width: screenWidth, 
            width: 390 *coefficientWidth,  
            alignSelf: 'center',
            // flex: 0.1,
            // scaleX: 0.8,
            // scaleY: 0.8,
            // paddingTop:216*coefficientHeight,
            // paddingTop:100*coefficientHeight,
            position: 'absolute',
        },
        CompleteChangeTextWrapper:{
            width: 324*coefficientWidth,
            height: 60 *coefficientHeight,
            // paddingTop: 190*coefficientHeight,
            // alignSelf: 'center',
            // paddingLeft: 37*coefficientWidth,
            marginLeft: 37*coefficientWidth,
            marginTop: 150*coefficientHeight,
            // backgroundColor: colors.backgroundGr,

        },
        CompleteChangeText:{
            fontFamily: 'mt-bold',
            fontSize: 25*coefficientHeight,
            // alignSelf: 'flex-start',
            
            color: colors.blackText,
            // marginHorizontal: 40*coefficientWidth,
        },
        WrapperCompleteChangeMessage:{
            width: 323*coefficientWidth,
            height: 75*coefficientHeight,
            // marginHorizontal: 40*coefficientWidth,
            marginLeft: 37*coefficientWidth,
            paddingTop: 13*coefficientHeight,
            

        },
        CompleteChangeMessage:{
            fontFamily: 'mt-regular',
            fontSize: 18*coefficientHeight,
            color: colors.grayLight,
        },
        SendButtonWrapper:{
            paddingTop:coefficientHeight* 26,
            width:coefficientHeight* 323,
            alignSelf: 'center',
        },
        SendButtonBackground:{
            backgroundColor: colors.backgroundGr,
            height:coefficientHeight* 58,
            width:coefficientWidth* 323,
            borderRadius:50,
            alignSelf: 'center',
        },
        SendButtonText:{
            fontFamily: 'mt-bold',
            alignSelf: 'center',
            marginTop: coefficientHeight* 14,
            fontSize: 22*coefficientHeight,
            color: 'white',
        },
    }
)