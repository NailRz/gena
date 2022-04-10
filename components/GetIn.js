import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  viewBox,
  TouchableOpacity,
  TextInput,
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

import Woman from "../assets/images/Woman.jsx";
import UrnaSort from "../assets/images/UrnaSort";

import * as Animatable from "react-native-animatable";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const defaultWidth = 390;
const defaultHeight = 844;
const bebra = 20;
const coefficientWidth = screenWidth / defaultWidth;
const coefficientHeight = screenHeight / defaultHeight;

export default function GetIn({ navigation }) {
  const loadScene = () => {
    navigation.navigate("Authentification");
  };
  const RegReg = () => {
    navigation.navigate("Registration");
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
    <SafeAreaView style={styles.container}>
      <Animatable.View animation="fadeIn" style={styles.container}>
        <Woman style={styles.woman}> </Woman>
        <UrnaSort style={styles.urnaSort}> </UrnaSort>

        {/* Vhod */}

        <View style={styles.vhodRegWrapper}>
          <View style={styles.vhodButtonWrapper}>
            <TouchableOpacity onPress={loadScene}>
              <View style={styles.vhodButtonBackground}>
                <Text style={styles.vhodButtonText}> Вход </Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* Registration */}
          <View style={styles.regButtonWrapper}>
            <TouchableOpacity onPress={RegReg}>
              <View style={styles.regButtonBackground}>
                <Text style={styles.regButtonText}> Регистрация </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* o boje, kak je ya horosh */}
      </Animatable.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: screenHeight,
    width: screenWidth,
  },
  woman: {
    alignSelf: "center",
    flex: 0.9,
    width: coefficientWidth * 333,
    height: coefficientHeight * 333,
  },
  urnaSort: {
    alignSelf: "center",
    width: coefficientWidth * 305,
    height: coefficientHeight * 115,
  },
  vhodRegWrapper: {
    flex: 0.6,
  },
  vhodButtonWrapper: {
    paddingTop: coefficientHeight * 77,
    width: coefficientHeight * 323,
    alignSelf: "center",
  },
  vhodButtonBackground: {
    backgroundColor: colors.backgroundGr,
    height: coefficientHeight * 58,
    width: coefficientWidth * 323,
    borderRadius: 50,
    alignSelf: "center",
  },
  vhodButtonText: {
    fontFamily: "mt-bold",
    alignSelf: "center",
    marginTop: coefficientHeight * 14,
    fontSize: 22 * coefficientHeight,
    color: "white",
  },
  regButtonWrapper: {
    paddingTop: 15 * coefficientHeight,
    width: coefficientHeight * 323,
    alignSelf: "center",
  },
  regButtonBackground: {
    backgroundColor: colors.white,
    height: 58 * coefficientHeight,
    width: 323 * coefficientWidth,
    borderRadius: 50,
    alignSelf: "center",
    borderColor: colors.backgroundGr,
    borderWidth: 2,
  },
  regButtonText: {
    fontFamily: "mt-bold",
    alignSelf: "center",
    marginTop: 14 * coefficientHeight,
    fontSize: 22 * coefficientHeight,
    color: colors.backgroundGr,
  },
});
