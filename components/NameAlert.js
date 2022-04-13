import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  viewBox,
  TouchableOpacity,
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
import React, { Component } from "react";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const defaultWidth = 390;
const defaultHeight = 844;
const bebra = 20;
const coefficientWidth = screenWidth / defaultWidth;
const coefficientHeight = screenHeight / defaultHeight;

export default function NameAlert({ navigation }) {
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
      {/* <Text>NameAlertComponent</Text> */}
      <View style={styles.Wrapper}>
        <Text style={styles.FirstText}>Имя и фамилия</Text>
        <Text style={styles.SecondText}>Введите новые имя и фамилию</Text>
        <View style={styles.InputWrapper}></View>
        <View style={styles.ButtonsWrapper}>
          <Text style={styles.FirstButton}>Отменить</Text>
          <Text style={styles.SecondButton}>Сохранить</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    // flex:1,
    elevation:2,
    width: 325 * coefficientWidth,
    height: 221 * coefficientHeight,
    backgroundColor: colors.backgroundWh,
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: "50%",
  },
  FirstText: {
    fontFamily: "mt-regular",
    fontSize: 20,
    alignSelf: "center",
    paddingTop: 24 * coefficientHeight,
  },
  SecondText: {
    paddingTop: 19 * coefficientHeight,
    fontFamily: "mt-regular",
    color: colors.grayLight,
    alignSelf: "center",
    fontSize: 14,
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
    backgroundColor: colors.backgroundGr,
    marginTop:36*coefficientHeight,
  },
  FirstButton: {
    right:137*coefficientWidth,
    position: "absolute",
    fontFamily: "mt-semiBold",
    color: colors.grayLight,
    
  },
  SecondButton: {
    // flexBasis:1
    position: "absolute",
    right: 22*coefficientWidth,
    fontFamily: "mt-semiBold",
    color: colors.backgroundGr,
  },
});
