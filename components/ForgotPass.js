import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  viewBox,
  SafeAreaView,
  TouchableOpacity,
  VirtualizedList,
  TextInput,
} from "react-native";
import colors from "../assets/colors/colors";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import * as Svg from "react-native-svg";
// fonts
import AppLoading from "expo-app-loading";
import { useFonts } from "@expo-google-fonts/inter";
import * as Animatable from "react-native-animatable";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const defaultWidth = 390;
const defaultHeight = 844;
const coefficientWidth = screenWidth / defaultWidth;
const coefficientHeight = screenHeight / defaultHeight;

import ArrowBack from "../assets/images/ArrowBack";
import UrnaWelcome from "../assets/images/UrnaWelcome";
import WaveGreen from "../assets/images/WaveGreen";

export default function ForgotPass({ navigation }) {
  const Vremennaya = () => {
    navigation.navigate("ChangePassFirst");
  };
  const Back = () => {
    navigation.navigate("Authentification");
  };
  let [fontsLoaded] = useFonts({
    "mt-bold": require("../assets/fonts/SFUIDisplayBold.ttf"),
    "mt-semiBold": require("../assets/fonts/SFUIDisplaySemiBold.ttf"),
    "mt-regular": require("../assets/fonts/SFUIDisplayRegular.ttf"),
    "kr-regular": require("../assets/fonts/SFUIDisplayKronaRegular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        {/* ArrowBack */}
        <Animatable.View animation="fadeIn">
          <TouchableOpacity onPress={Back}>
            <ArrowBack style={styles.ArrowBack}></ArrowBack>
          </TouchableOpacity>
        </Animatable.View>
        {/* UrnaWelcome */}
        <Animatable.View animation="fadeIn">
          <UrnaWelcome style={styles.UrnaWelcome}> </UrnaWelcome>
        </Animatable.View>
        <View style={styles.WrapperWhiteWaveBg}>
          <WaveGreen style={styles.WaveGreen}></WaveGreen>
          {/* ForgotPassText */}
          <Animatable.View animation="fadeIn">
            <Text style={styles.ForgotPassText}>Забыли пароль?</Text>
            {/* ForgotPassMessage */}
            <View style={styles.WrapperForgotPassMessage}>
              <Text style={styles.ForgotPassMessage}>
                Введите свой адрес электронной почты, чтобы получить письмо с
                инструкцией по восстановлению.
              </Text>
            </View>
            {/* MailInput */}
            <View style={styles.MailInputWrapper}>
              <View style={styles.MailInputBackground}>
                <TextInput
                  style={styles.inputButtonText}
                  placeholder="Ivan@mail.com"
                />
                {/* <Text style = {styles.MailInputText}> Ivan@mail.com </Text> */}
              </View>
            </View>
            {/* SendButton */}
            <View style={styles.SendButtonWrapper}>
              <TouchableOpacity onPress={Vremennaya}>
                <View style={styles.SendButtonBackground}>
                  <Text style={styles.SendButtonText}> Отправить </Text>
                </View>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundGr,
    width: screenWidth,
    height: screenHeight,
  },
  WrapperWhiteWaveBg: {
    position: "absolute",
    marginTop: 216 * coefficientHeight,
    width: 390 * coefficientWidth,
    height: 628 * coefficientHeight,
    backgroundColor: colors.backgroundWh,
  },
  ArrowBack: {
    alignSelf: "flex-start",
    marginTop: 40 * coefficientHeight,
    marginLeft: 20 * coefficientWidth,
    width: 17.5 * coefficientWidth,
    height: 28 * coefficientHeight,
  },
  UrnaWelcome: {
    marginLeft: 26 * coefficientHeight,
    height: 115 * coefficientHeight,
    width: 298 * coefficientWidth,
    marginTop: 20 * coefficientHeight,
  },
  WaveGreen: {
    // height: screenHeight * 0.08,//87* coefficientHeight,
    height: 70 * coefficientHeight,
    // width: screenWidth,
    width: 390 * coefficientWidth,
    alignSelf: "center",
    // flex: 0.1,
    // scaleX: 0.8,
    // scaleY: 0.8,
    // paddingTop:216*coefficientHeight,
    // paddingTop:100*coefficientHeight,
    position: "absolute",
  },
  ForgotPassText: {
    fontFamily: "mt-bold",
    fontSize: 25 * coefficientHeight,
    alignSelf: "flex-start",
    paddingTop: 190 * coefficientHeight,
    color: colors.blackText,
    marginHorizontal: 40 * coefficientWidth,
  },
  WrapperForgotPassMessage: {
    width: 323 * coefficientWidth,
    height: 80 * coefficientHeight,
    marginHorizontal: 40 * coefficientWidth,
    paddingTop: 13 * coefficientHeight,
  },
  ForgotPassMessage: {
    fontFamily: "mt-regular",
    fontSize: 18 * coefficientHeight,
    color: colors.grayLight,
  },
  MailInputWrapper: {
    alignSelf: "center",
    paddingTop: 10 * coefficientHeight,
  },
  MailInputBackground: {
    backgroundColor: colors.backgroundWh,
    height: coefficientHeight * 58,
    width: coefficientWidth * 323,
    borderRadius: 50,
    alignSelf: "center",
    borderColor: colors.grayLight,
    borderWidth: 2,
  },
  inputButtonText: {
    height: coefficientHeight * 52,
    width: coefficientWidth * 320,
    borderRadius: 50,
    fontFamily: "mt-regular",
    alignSelf: "flex-start",
    marginLeft: 1 * coefficientWidth,
    padding: 17 * coefficientWidth,
    marginTop: coefficientHeight * 1,
    fontSize: 20 * coefficientHeight,
    // placeholderTextColor: colors.grayLight,
    color: colors.grayDark,
  },
  MailInputText: {
    fontFamily: "mt-regular",
    alignSelf: "flex-start",
    marginLeft: 20 * coefficientWidth,
    marginTop: coefficientHeight * 17,
    fontSize: 18 * coefficientHeight,
    color: colors.grayLight,
  },
  SendButtonWrapper: {
    paddingTop: coefficientHeight * 20,
    width: coefficientHeight * 323,
    alignSelf: "center",
  },
  SendButtonBackground: {
    backgroundColor: colors.backgroundGr,
    height: coefficientHeight * 58,
    width: coefficientWidth * 323,
    borderRadius: 50,
    alignSelf: "center",
  },
  SendButtonText: {
    fontFamily: "mt-bold",
    alignSelf: "center",
    marginTop: coefficientHeight * 14,
    fontSize: 22 * coefficientHeight,
    color: "white",
  },
});
