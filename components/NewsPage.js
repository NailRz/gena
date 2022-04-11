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

import PlasticFilter from "../assets/images/PlasticFilter";
import BioFilter from "../assets/images/BioFilter";
import PaperFilter from "../assets/images/PaperFilter";


export default function MapPageConst({ navigation }) {
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
    <SafeAreaView style={styles.Area}>
      {/* <Text>NewsPage</Text> */}
      {/* <View style={styles.PlasticFilterWrapper}></View>
      <View style={styles.BioFilterWrapper}></View>
      <View style={styles.PaperFilterWrapper}></View> */}
      <PlasticFilter style={styles.PlasticFilterWrapper}></PlasticFilter>
          <BioFilter style={styles.BioFilterWrapper}></BioFilter>
          <PaperFilter style={styles.PaperFilterWrapper}></PaperFilter> 
         {/* <Text>bebra</Text>  */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Area: {
    marginHorizontal:20*coefficientWidth,
    height:300
  },
  PlasticFilterWrapper: {
    width: 117 * coefficientHeight,
    height: 96 * coefficientHeight,
    // backgroundColor: colors.backgroundGr,
    position:'absolute',
    marginTop:25*coefficientHeight,
  },
  BioFilterWrapper: {
    width: 97 * coefficientHeight,
    height: 96 * coefficientHeight,
    // backgroundColor: colors.backgroundGr,
    position:'absolute',
    marginTop:25*coefficientHeight,
    alignSelf:'center',
  },
  PaperFilterWrapper: {
    width: 96 * coefficientHeight,
    height: 96 * coefficientHeight,
    // backgroundColor: colors.backgroundGr,
    position:'absolute',
    marginTop:25*coefficientHeight,
    alignSelf:'flex-end',
  },
});
