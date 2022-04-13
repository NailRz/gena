import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  viewBox,
  TouchableOpacity,
  Modal,
  TouchableHighlight
} from "react-native";
import colors from "../assets/colors/colors";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Svg from "react-native-svg";
// fonts
import AppLoading from "expo-app-loading";
import { useFonts } from "@expo-google-fonts/inter";
import Authentification from "../components/Authentification";
// import ForgotPass from '../components/ForgotPass';
import React, { useState, Component } from "react";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const defaultWidth = 390;
const defaultHeight = 844;
const bebra = 20;
const coefficientWidth = screenWidth / defaultWidth;
const coefficientHeight = screenHeight / defaultHeight;
import Filters from "../assets/images/Filters";
// import NameAlert from "./NameAlert";

export default function MapPageConst({ navigation }) {
  const [showModal, setshowModal] = useState(false);
  const onPressButton = () => {
    
    setshowModal(!showModal), console.log(showModal);
  };

  let [fontsLoaded] = useFonts({
    "mt-bold": require("../assets/fonts/SFUIDisplayBold.ttf"),
    "mt-semiBold": require("../assets/fonts/SFUIDisplaySemiBold.ttf"),
    "mt-regular": require("../assets/fonts/SFUIDisplayRegular.ttf"),
    "kr-regular": require("../assets/fonts/SFUIDisplayKronaRegular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView>
      <TouchableOpacity >
        <Filters/>
      </TouchableOpacity>
      {/* Окно изменения имени */}
      <Modal
       animationType="fade"
       transparent={true}
        style={styles.Modal}
        visible={showModal}
        onRequestClose={() => {
          setshowModal(false);
        }}
      >
        <View style={styles.Wrapper}>
          <Text style={styles.FirstText}>Имя и фамилия</Text>
          <Text style={styles.SecondText}>Введите новые имя и фамилию</Text>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Modal: {
    backgroundColor: "black",
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
    
  },
  FirstText: {
    fontFamily: "mt-regular",
    fontSize: 20*coefficientHeight,
    alignSelf: "center",
    paddingTop: 24 * coefficientHeight,
  },
  SecondText: {
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
});

