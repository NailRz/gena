import { StyleSheet, Pressable, Text, View, Dimensions, Image, viewBox , SafeAreaView, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import colors from '../assets/colors/colors';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Svg from 'react-native-svg';
// fonts
import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/inter';  

// import WhiteWavePNG from '../assets/images/whitewavebg.png';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const defaultWidth = 390;
const defaultHeight = 844;
const coefficientWidth = screenWidth/defaultWidth;
const coefficientHeight = screenHeight/defaultHeight;
let mama = screenWidth - 414;
if (mama < 0)
{
    mama = mama * (-1)
}

import WhiteWaveBg from '../assets/images/WhiteWaveBg';
import ArrowBack from '../assets/images/ArrowBack';
import UrnaWelcome from '../assets/images/UrnaWelcome';
import Or from '../assets/images/Or';
import WaveGreen from '../assets/images/WaveGreen';
import GoogleIcon from '../assets/images/GoogleIcon';
import VkIcon from '../assets/images/VkIcon';
import FacebookIcon from '../assets/images/FacebookIcon';


import CustomInput from './CustomInput';
import CustomInputPassword from './CustomInputPassword';
import useTogglePasswordVisibility  from './useTogglePasswordVisibility';
import GetIn from './GetIn';
// import ForgotPass from './ForgotPass';


// const whiteWave = {WhiteWaveBg};

export default function Authentification({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
    const RegPage = () => {
        navigation.navigate('Registration');
    }
    const MapPageGo = () => {
        navigation.navigate('MapPageScreen');
    }
    const Back = () => {
        navigation.navigate('GetIn');}
    const ForgotPassword = () => {
            navigation.navigate('ForgotPass');}
            let [fontsLoaded] = useFonts({
                'mt-bold': require('../assets/fonts/SFUIDisplayBold.ttf'),
                'mt-semiBold': require('../assets/fonts/SFUIDisplaySemiBold.ttf'),
                'mt-regular': require('../assets/fonts/SFUIDisplayRegular.ttf'),
                'kr-regular': require('../assets/fonts/SFUIDisplayKronaRegular.ttf'),
              });
              if (!fontsLoaded) {
                return <AppLoading />;
              }
    return(
        <SafeAreaView style = {styles.container}>
            {/* ArrowBack */}
            <TouchableOpacity onPress = {() => navigation.goBack()}>
            <ArrowBack style = {styles.ArrowBack}></ArrowBack>
            </TouchableOpacity>
            {/* UrnaWelcome */}
            <UrnaWelcome style = {styles.UrnaWelcome}> </UrnaWelcome>
            {/* WaveBg */}
            
            {/* <ImageBackground source={requaer('../assets/images/waveWork.png')} style = {styles.WaveGreen}></ImageBackground> */}
            <View style = {styles.WrapperWhiteWaveBg}>
            <WaveGreen style = {styles.WaveGreen}></WaveGreen>
                {/* text voidite v acc */}
                <Text style = {styles.textGetInAccImport}>Войдите в аккаунт</Text>
                {/* Inputs */}
                <View style = {styles.inputsWrapper}>
                    {/* LoginInput */}
                    <View style = {styles.loginButtonWrapper} >
                        <View style = {styles.loginButtonBackground}>
                            <CustomInput
                            placeholder="Ivan" 
                            value={username} 
                            setValue={setUsername}
                            />
                        {/* <Text style = {styles.loginButtonText}> Ivan </Text> */}
                        </View>
                    </View>
                    {/* PassInput */}
                    <View style = {styles.passInputButtonWrapper} >
                        <View style = {styles.passInputButtonBackground}>
                            <CustomInputPassword
                            secureTextEntry={passwordVisibility}
                            value={password}
                            setValue={setPassword}
                            />
                            <Pressable onPress={handlePasswordVisibility}>
                                <MaterialCommunityIcons name={rightIcon} size={30*coefficientHeight} style = {styles.eyeStyle} />
                            </Pressable>
                        </View>
                    </View>
                    {/* ForgotPassText */}
                    <TouchableOpacity style = {styles.ForgotPassTextOpacity} onPress={ForgotPassword}>
                    <Text style = {styles.ForgotPassText}>Забыли пароль?</Text>
                    </TouchableOpacity>
                </View>     
                
                {/* GetInButton */}
                <View style = {styles.vhodButtonWrapper} >
                    <TouchableOpacity onPress={MapPageGo}>
                    <View style = {styles.vhodButtonBackground}>
                        <Text style = {styles.vhodButtonText}> Войти </Text>
                    </View>
                    </TouchableOpacity>
                </View>
                {/* xuiniaILI */}
                <Or style = {styles.ORView}></Or>
                {/* Vk fb gl */}
                <View style = {styles.socialWrapper}>
                    <GoogleIcon style = {styles.socialGoogle}></GoogleIcon>
                    <VkIcon style = {styles.socialVk}></VkIcon>
                    <FacebookIcon style = {styles.socialFacebook}></FacebookIcon>
                </View>
                {/* NoRegYetText */}
                <Text style = {styles.NoRegYetText}>Еще не зарегистрированны?</Text>
                {/* CreateAccText */}
                <TouchableOpacity style = {styles.ForgotPassTextOpacitySecond} onPress = {RegPage}>
                <Text style = {styles.CreateAccText}>Создайте аккаунт</Text>
                </TouchableOpacity>
            </View>
    
        {/* </WhiteWaveBg> */}
            
        </SafeAreaView>
    
    )

}


const styles = StyleSheet.create(
{
    container:{
        backgroundColor: colors.backgroundGr,
        width: screenWidth,
        height:screenHeight,
    },
    imageBg:{
        width: 390*coefficientWidth,
        height: 628*coefficientHeight,
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
        // : 113*coefficientHeight,
        // flex: 0.28,
    },
    WaveGreen:{
        height: screenHeight * 0.08,//87* coefficientHeight,
        // height: 110*coefficientHeight,
        width: screenWidth, 
        // width: 390 *coefficientWidth,  
        alignSelf: 'center',
        // flex: 0.1,
        // scaleX: 0.8,
        // scaleY: 0.8,
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
        // boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        // transform: "matrix(-1, 0, 0, 1, 0, 0)"
        // transform: "matrix(-1, 0, 0, 1, 0, 0)"

        // flex:1,
        
        // resizeMode:1
    //    position:"absolute",
    //    top:216*coefficientHeight,
    },
    textGetInAccImport:{
        fontFamily: 'mt-bold',
        color: colors.blackText,
        alignSelf: 'center',
        fontSize: 25*coefficientHeight,
        marginTop: 106*coefficientHeight,

    },
    inputsWrapper:{
        // flex:0.5,
        paddingTop:coefficientHeight* 24,
        width:coefficientWidth* 323,
        // height:158*coefficientHeight,
        alignSelf: 'center',
        // backgroundColor: colors.backgroundGr,
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
    loginButtonInputText:{
        height:coefficientHeight* 52,
        width:coefficientWidth* 320,
        borderRadius:50,
        fontFamily: 'mt-regular',
        alignSelf: 'flex-start',
        marginLeft:1*coefficientWidth,
        padding: 17,
        marginTop: coefficientHeight* 1,
        fontSize: 18*coefficientHeight,
        color: colors.blackText,
    },
    passInputButtonWrapper:{
        marginTop: 21*coefficientHeight,
        alignSelf: 'center',
    },
    passInputButtonBackground:{
        backgroundColor: colors.backgroundWh,
        height:coefficientHeight* 58,
        width:coefficientWidth* 323,
        borderRadius:50,
        alignSelf: 'center',
        flexDirection: 'row',
        borderColor: colors.grayLight,
        borderWidth:2,
    },
    eyeStyle:{
        color: colors.grayLight,
        paddingTop: 13 * coefficientHeight,

    },
    passInputButtonInputText:{
        height:coefficientHeight* 58,
        width:coefficientWidth* 320,
        borderRadius:50,
        fontFamily: 'mt-regular',
        alignSelf: 'flex-start',
        marginLeft:1*coefficientWidth,
        padding: 17,
        marginTop: coefficientHeight* 1,
        fontSize: 18*coefficientHeight,
        color: colors.blackText,
    },
    ForgotPassTextOpacity:{
        // marginLeft: "70%",
        width: 160*coefficientWidth,
        height: 40*coefficientHeight,
        alignSelf: 'flex-end',
        // backgroundColor: colors.backgroundGr,
        // marginRight: 20*coefficientWidth,    
    },  
    ForgotPassText:{
        // alignSelf: 'flex-end',
        paddingTop: 9*coefficientHeight,
        fontFamily: 'mt-regular',
        color: colors.grayLight,
        // paddingStart: screenWidth * 0.362,//screenWidth * 0.232,
        fontSize: 18*coefficientHeight,
        // marginLeft: screenWidth * 0.48309179 + (mama / 4),
        // marginRight:28*coefficientWidth,
        // backgroundColor: colors.backgroundGr,
        alignSelf: 'flex-end',
    },
    vhodButtonWrapper:{
        paddingTop:coefficientHeight* 13,
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
        // position: 'absolute',
        height: 21*coefficientHeight,
        width: 332*coefficientWidth,
        marginVertical: 18*coefficientHeight,
        alignSelf: 'center',
        // marginHorizontal:20*coefficientWidth,
        // backgroundColor: colors.grayDarkFilter,
        // flex: 1,
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
    NoRegYetText:{
        fontFamily: 'mt-regular',
        alignSelf: 'flex-start',
        paddingTop: coefficientHeight* 54,
        paddingLeft: 28*coefficientWidth,
        fontSize: 18*coefficientHeight,
        color: colors.grayLight,
        
    },
    ForgotPassTextOpacitySecond:{
        // backgroundColor: colors.shitColor,
        marginLeft: 28*coefficientWidth,
        alignSelf: 'flex-start',
    },  
    CreateAccText:{
        fontFamily: 'mt-regular',
        // alignSelf: 'flex-start',
        // paddingLeft: 28*coefficientWidth,
        fontSize: 18*coefficientHeight,
        color: colors.backgroundGr,
    },
    
        
}
)