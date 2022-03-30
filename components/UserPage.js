import { StyleSheet, Text, View, Dimensions, Image, viewBox, TouchableOpacity  } from 'react-native';
import colors from '../assets/colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Svg from 'react-native-svg';
// fonts
import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/inter';  
import Authentification from '../components/Authentification';
// import ForgotPass from '../components/ForgotPass';
import React, {Component} from 'react';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const defaultWidth = 390;
const defaultHeight = 844;
const bebra = 20;
const coefficientWidth = screenWidth/defaultWidth;
const coefficientHeight = screenHeight/defaultHeight;

import WaveGreenReversed from '../assets/images/WaveGreenReversed';
import Pen from '../assets/images/Pen';
import Quit from '../assets/images/Quit';



export default function MapPageConst({navigation}) {
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
            <View style = {styles.UserPhotoWrapper}>
            <Image 
              style = {styles.UserPhoto}
              source = {(require('../assets/images/PhotoGoshan.jpg'))} 
              />
            <Text style = {styles.UserNickname}>Nickname</Text>
          </View>

          <View style = {styles.WrapperWhiteWaveBg}>
            <WaveGreenReversed style = {styles.WaveGreenReversed}></WaveGreenReversed>
            <View style = {styles.SettingsWrapper}>
              <Text style = {styles.SettingText}>Настройки</Text>
              <View style = {styles.NameWrapper}>
                <Text style = {styles.MainText}>Имя и фамилия</Text>
                <Text style = {styles.SecondText}>Гоша Мехдиев</Text>
                <Pen style = {styles.Pen}></Pen>
              </View>
              <View style = {styles.MaleWrapper}>
                <Text style = {styles.MainText}>Пол</Text>
                <Text style = {styles.SecondText}>Мужской</Text>
                <Pen style = {styles.Pen}></Pen>
              </View>
              <View style = {styles.MailWrapper}>
                <Text style = {styles.MainText}>Почта</Text>
                <Text style = {styles.SecondText}>mehdiev@email.com</Text>
                <Pen style = {styles.Pen}></Pen>
              </View>
              <View style = {styles.PasswordInfoWrapper}>
                <Text style = {styles.MainText}>Пароль</Text>
                <Text style = {styles.SecondText}>mehdiev1</Text>
                <Pen style = {styles.Pen}></Pen>
              </View>
              <Text style = {styles.DeleteProfile}>Удалить профиль</Text>
              <View style = {styles.QuitWrapper}>
              <Text style = {styles.SignOut}>Выйти</Text>
              <Quit style = {styles.Quit}></Quit>
              </View>
              
            </View>
            
          </View>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create(
  {
  container:{
    backgroundColor: colors.backgroundGr,
    width: screenWidth,
    height:screenHeight,
  },
  WaveGreenReversed:{
    height: screenHeight * 0.08,
    width: screenWidth, 
    alignSelf: 'center',
    position: 'absolute',
},
  WrapperWhiteWaveBg:{
   position: 'absolute',
    marginTop: 216*coefficientHeight,
    width: 390*coefficientWidth,
    height: 628*coefficientHeight,
    backgroundColor: colors.backgroundWh,
},

  UserPhotoWrapper:{
    alignSelf: 'center',
},
  UserPhoto:{
    width: 130*coefficientWidth,
    height: 130*coefficientHeight,
    borderRadius:130,
    marginTop: 10*coefficientHeight,
},
  Pen:{
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop:22*coefficientHeight,
  },
  UserNickname:{
    alignSelf: 'center',
    paddingTop: 10*coefficientHeight,
    fontSize: 30*coefficientHeight,
    fontFamily: 'mt-bold',
    color: colors.backgroundWh,
  },
  SettingsWrapper:{
    width: 309*coefficientWidth,
    height: 408*coefficientHeight,
    alignSelf: 'center',
    paddingTop: 74*coefficientHeight,
  },
  SettingText:{
    fontFamily: 'mt-semiBold',
    fontSize: 22*coefficientHeight,
    alignSelf: 'center',
    color: colors.blackText,
  },
  MainText:{
    fontFamily: 'mt-regular',
    fontSize: 20*coefficientHeight,
    color: colors.blackText,
  },
  SecondText:{
    fontFamily: 'mt-regular',
    fontSize: 17*coefficientHeight,
    color: colors.grayLight,
  },
  NameWrapper:{
    paddingTop:15*coefficientHeight,
    width: 309*coefficientWidth,
    height: 60 *coefficientHeight,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayUltraLight,
  },
  MaleWrapper:{
    paddingTop: 11*coefficientHeight,
    width: 309*coefficientWidth,
    height: 60 *coefficientHeight,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayUltraLight,
  },
  MailWrapper:{
    paddingTop: 11*coefficientHeight,
    width: 309*coefficientWidth,
    height: 60 *coefficientHeight,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayUltraLight,
  },
  PasswordInfoWrapper:{
    paddingTop: 11*coefficientHeight,
    width: 309*coefficientWidth,
    height: 60 *coefficientHeight,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayUltraLight,
  },
  DeleteProfile:{
    paddingTop: 16*coefficientHeight,
    fontFamily: 'mt-regular',
    fontSize: 20*coefficientHeight,
    color: colors.shitColor,
  },
  SignOut:{
    paddingTop: 11*coefficientHeight,
    fontFamily: 'mt-regular',
    fontSize: 20*coefficientHeight,
    color: colors.backgroundGr,
  },
  QuitWrapper:{
    width: 90*coefficientWidth,
    height: 30*coefficientHeight,
    
  },  
  Quit:{
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop:  10*coefficientHeight,
    
  },


  }
)

