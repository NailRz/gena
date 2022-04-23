import { StyleSheet, Text, View, Dimensions, Image, viewBox, TouchableOpacity, Modal  } from 'react-native';
import colors from '../assets/colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Svg from 'react-native-svg';
// fonts
import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/inter';  
import Authentification from '../components/Authentification';
// import ForgotPass from '../components/ForgotPass';
import React, {useState, Component} from 'react';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const defaultWidth = 390;
const defaultHeight = 844;
const bebra = 20;
const coefficientWidth = screenWidth/defaultWidth;
const coefficientHeight = screenHeight/defaultHeight;

import Filters from "../assets/images/Filters";
import WaveGreenReversed from '../assets/images/WaveGreenReversed';
import Pen from '../assets/images/Pen';
import Quit from '../assets/images/Quit';
import NameAlert from './NameAlert'


export default function UserPage({navigation}) {
  const NameAlert = () => {
    navigation.navigate("NameAlert");
  }
  const [showModal, setshowModal] = useState(false);
  const onPressButton = () => {
    
    setshowModal(!showModal), console.log(showModal);
  };
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
        // <NameAlert position = 'absolute' >
        <SafeAreaView style = {styles.container}>

              <Modal 
              animationType="fade"
              transparent={true}
                backgroundColor={'rgba(0, 0, 0, 0.5)'}
                style={styles.Modal}
                visible={showModal}
                onRequestClose={() => {
                  setshowModal(false);
                }}
              >
                <View style={styles.Wrapper}>
                  <Text style={styles.FirstText}>Имя и фамилия</Text>
                  <Text style={styles.SecondTextModal}>Введите новые имя и фамилию</Text>
                  <View style={styles.InputWrapper}></View>
                  <View style={styles.ButtonsWrapper}>
                    <TouchableOpacity style={styles.TouchableFirst} onPress = {onPressButton} >
                      <View  style={styles.FirstButtonWrapper}>
                      <Text style={styles.FirstButton}>Отменить</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.TouchableSecond} onPress = {onPressButton} >
                      <View  style={styles.SecondButtonWrapper}>
                    <Text style={styles.SecondButton}>Сохранить</Text>
                    </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>

          
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
                <TouchableOpacity style = {styles.Pen} onPress={
                   onPressButton
                   }>
                  <Pen></Pen>
                </TouchableOpacity>
                {/* <TouchableOpacity style = {styles.Pen} OnPress = {onPressButton}>
                <Pen></Pen>
                
                </TouchableOpacity> */}

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
        // </NameAlert>
      );
}

const styles = StyleSheet.create(
  {
    Modal: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      // flex:1,
      
    },
    Wrapper: {
      
      // flex:1,
      elevation: 2,
      width: 325 * coefficientWidth,
      height: 221 * coefficientHeight,
      backgroundColor: colors.backgroundWh,
      borderRadius: 10,
      alignSelf: "center",
      marginVertical: "50%",
      borderColor: colors.grayLight,
      borderWidth: 1,
      
    },
    FirstText: {
      fontFamily: "mt-regular",
      fontSize: 20*coefficientHeight,
      alignSelf: "center",
      paddingTop: 24 * coefficientHeight,
    },
    SecondTextModal: {
      paddingTop: 19 * coefficientHeight,
      fontFamily: "mt-regular",
      color: colors.grayLight,
      alignSelf: "center",
      fontSize: 14*coefficientHeight,
    },
    InputWrapper: {
      marginTop: 13 * coefficientHeight,
      width: 249 * coefficientWidth,
      height: 47 * coefficientHeight,
      backgroundColor: colors.backgroundWh,
      borderColor: colors.grayLight,
      borderWidth: 2,
      borderRadius: 50,
      alignSelf: "center",
    },
    ButtonsWrapper: {
      flexDirection: "row",
      // backgroundColor: colors.backgroundGr,
      marginTop: 36 * coefficientHeight,
      width:202*coefficientWidth,
      height:16*coefficientHeight,
    },
    TouchableFirst:{
      // paddingRight: 137 * coefficientWidth,
    marginLeft:101*coefficientWidth,
      // position: "absolute",
      alignSelf:'flex-end',
      // width:87*coefficientWidth,
      // height:16*coefficientHeight,
      // backgroundColor:colors.backgroundGr,
    },
    FirstButtonWrapper:{
      // width:87*coefficientWidth,
      // height:16*coefficientHeight,
      // alignSelf:'flex-end'
    },
    FirstButton: {
      fontSize:14*coefficientHeight,
      fontFamily: "mt-semiBold",
      color: colors.grayLight,
    }, 
    TouchableSecond:{
      marginLeft:39*coefficientWidth,
      alignSelf:'flex-end',
    },
    SecondButtonWrapper:{
  
    },
    SecondButton: {
      fontSize:14*coefficientHeight,
      // flexBasis:1
      // position: "absolute",
      // marginRight:22*coefficientWidth,
      fontFamily: "mt-semiBold",
      color: colors.backgroundGr,
      // right:-100,
    },
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
    // flex:1,
},
  UserPhoto:{
    width: 130*coefficientHeight,
    height: 130*coefficientHeight,
    borderRadius:130,
    marginTop: 10*coefficientHeight,
    alignSelf: 'center',
},
  Pen:{
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: 17*coefficientHeight,
    // marginVertical: '50%',
    width: 24*coefficientWidth,
    height: 24*coefficientHeight
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
    paddingBottom: 15*coefficientHeight,
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
    paddingTop:11*coefficientHeight,
    width: 309*coefficientWidth,
    height: 60 *coefficientHeight,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayUltraLight,
    // backgroundColor: colors.backgroundGr,
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
  QuitWrapper:{
    // width: 90*coefficientWidth,
    // height: 30*coefficientHeight,
    flexDirection: 'row',
  },  
  SignOut:{
    paddingTop: 11*coefficientHeight,
    fontFamily: 'mt-regular',
    fontSize: 20*coefficientHeight,
    color: colors.backgroundGr,
    alignSelf: 'flex-start',
  },
  Quit:{
    // position: 'absolute',
    alignSelf: 'flex-start',
    marginTop:  10*coefficientHeight,
    marginLeft: 2*coefficientWidth,
    width: 24*coefficientWidth,
    height:24*coefficientHeight,
  },


  }
)

