import { StyleSheet, Text, View, Dimensions, Image, viewBox , SafeAreaView, TouchableOpacity, VirtualizedList, TextInput } from 'react-native';
import colors from '../assets/colors/colors';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Svg from 'react-native-svg';
// fonts
import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/inter';  

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const defaultWidth = 390;
const defaultHeight = 844;
const coefficientWidth = screenWidth/defaultWidth;
const coefficientHeight = screenHeight/defaultHeight;

import ArrowBack from '../assets/images/ArrowBack';
import UrnaWelcome from '../assets/images/UrnaWelcome';
import WaveGreen from '../assets/images/WaveGreen';

export default function ChangePassFirst({navigation}) {
    const ChangeSecond = () => {
        navigation.navigate('ChangePassSecond');}
    const Back = () => {
        navigation.navigate('Authentification');}
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
                <TouchableOpacity onPress = {Back}>
                <ArrowBack style = {styles.ArrowBack}></ArrowBack>
                </TouchableOpacity>
                <UrnaWelcome style = {styles.UrnaWelcome}> </UrnaWelcome>
                <View style = {styles.WrapperWhiteWaveBg}>
                    <WaveGreen style = {styles.WaveGreen}></WaveGreen>
                    {/* InputNewPassText */}
                    <View style = {styles.InputNewPassTextWrapper}>
                    <Text style = {styles.InputNewPassText}>Введите новый пароль</Text>
                    </View>
                    {/* InputNewPass */}
                    <View style = {styles.InputNewPassButtonsWrapper}>
                        <View style = {styles.InputNewPassButtonBackground}>
                            <Text style = {styles.InputNewPassButtonText}> Введите новый пароль </Text>
                        </View>
                        {/* InputRepeatNewPassButton */}
                        <View style = {styles.InputRepeatNewPassButtonBackgroundWrapper}>
                        <View style = {styles.InputRepeatNewPassButtonBackground}>
                            <Text style = {styles.InputRepeatNewPassButtonText}> Поторите пароль </Text>
                        </View>
                        </View>
                        {/* SendButton */}
                        <View style = {styles.AcceptButtonWrapper} >
                            <TouchableOpacity onPress={ChangeSecond}>
                            <View style = {styles.AcceptButtonBackground}>
                                <Text style = {styles.AcceptButtonText}> Подтвердить </Text>
                            </View>
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
    ArrowBack:{
        alignSelf: 'flex-start',
        marginTop: 40*coefficientHeight,
        marginLeft: 20*coefficientWidth,
        width:17.5*coefficientWidth,
        height:28*coefficientHeight,
    },
    UrnaWelcome:{
        marginLeft: 26*coefficientHeight,
        height: 115* coefficientHeight,
        width: 298  * coefficientWidth,  
        marginTop: 20*coefficientHeight,
    },
    WrapperWhiteWaveBg:{
        position: 'absolute',
        marginTop: 216*coefficientHeight,
        width: 390*coefficientWidth,
        height: 628*coefficientHeight,
        backgroundColor: colors.backgroundWh,
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
    InputNewPassTextWrapper:{
        // width: 30*coefficientWidth,
        // height: 324*coefficientHeight,
        // paddingTop: 190*coefficientHeight,
        // marginHorizontal: 40*coefficientWidth,
        width: 300*coefficientWidth,
        height: 45*coefficientHeight,
        // marginHorizontal: 40*coefficientWidth,
        marginTop: 150*coefficientHeight,
        alignSelf: 'center',
        //backgroundColor: colors.backgroundGr,
    },  
    InputNewPassText:{
        fontFamily: 'mt-bold',
        fontSize: 23*coefficientHeight,
        // alignSelf: 'flex-start',
        color: colors.blackText,
        alignSelf: 'center',
        // backgroundColor: colors.backgroundGr,
        
    },
    InputNewPassButtonsWrapper:{
        width: 332*coefficientWidth,
        height: 125*coefficientHeight,
        marginHorizontal: 29*coefficientWidth,
        paddingTop: 15*coefficientHeight,
    },
    InputNewPassButtonBackground:{
        backgroundColor: colors.backgroundWh,
        height:coefficientHeight* 58,
        width:coefficientWidth* 323,
        borderRadius:50,
        alignSelf: 'center',
        borderColor: colors.grayLight,
        borderWidth:2,
    },
    InputNewPassButtonText:{
        fontFamily: 'mt-regular',
        alignSelf: 'flex-start',
        marginLeft:20*coefficientWidth,
        marginTop: coefficientHeight* 17,
        fontSize: 18*coefficientHeight,
        color: colors.grayLight,
    },
    InputRepeatNewPassButtonBackgroundWrapper:{
        paddingTop: 15*coefficientHeight,
    },
    InputRepeatNewPassButtonBackground:{
        backgroundColor: colors.backgroundWh,
        height:coefficientHeight* 58,
        width:coefficientWidth* 323,
        borderRadius:50,
        alignSelf: 'center',
        borderColor: colors.grayLight,
        borderWidth:2,
    },
    InputRepeatNewPassButtonText:{
        fontFamily: 'mt-regular',
        alignSelf: 'flex-start',
        marginLeft:20*coefficientWidth,
        marginTop: coefficientHeight* 17,
        fontSize: 18*coefficientHeight,
        color: colors.grayLight,
    },
    AcceptButtonWrapper:{
        paddingTop:coefficientHeight* 20,
        width:coefficientHeight* 323,
        alignSelf: 'center',
    },
    AcceptButtonBackground:{
        backgroundColor: colors.backgroundGr,
        height:coefficientHeight* 58,
        width:coefficientWidth* 323,
        borderRadius:50,
        alignSelf: 'center',
    },
    AcceptButtonText:{
        fontFamily: 'mt-bold',
        alignSelf: 'center',
        marginTop: coefficientHeight* 14,
        fontSize: 22*coefficientHeight,
        color: 'white',
    },

}
)

