import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Image,
  viewBox,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import colors from "../assets/colors/colors";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Svg from "react-native-svg";
// import MapView from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
// import  { Marker } from 'react-native-maps';
// fonts
import AppLoading from "expo-app-loading";
import { useFonts } from "@expo-google-fonts/inter";
import Authentification from "../components/Authentification";
// import ForgotPass from '../components/ForgotPass';
import React, { useRef, Component } from "react";
import Filters from "../assets/images/Filters";
import PlasticFilter from "../assets/images/PlasticFilter";
import BioFilter from "../assets/images/BioFilter";
import PaperFilter from "../assets/images/PaperFilter";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const defaultWidth = 390;
const defaultHeight = 844;
const bebra = 20;
const coefficientWidth = screenWidth / defaultWidth;
const coefficientHeight = screenHeight / defaultHeight;
// import SwipeContainer from 'react-native-scroll-up-container'

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
  // const scrollX = useRef(new Animated.Value(0)).current;
  // const deltaX = useRef(new Animated.Value(0)).current;
  // const deltaY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.map}>
      <Text>MapPage</Text>
      <Filters style={styles.Filters}></Filters>
      <ScrollView style={styles.FilersScroll}>
        <SafeAreaView style={styles.FilersAreaWrapper}>
          <PlasticFilter style={styles.PlasticFilterWrapper}></PlasticFilter>
          <BioFilter style={styles.BioFilterWrapper}></BioFilter>
          <PaperFilter style={styles.PaperFilterWrapper}></PaperFilter>
          {/* <View style={styles.PlasticFilterWrapper}></View>
          <View style={styles.BioFilterWrapper}></View>
          <View style={styles.PaperFilterWrapper}></View> */}
          {/* <PlasticFilter style={styles.PlasticFilter}></PlasticFilter>
          <BioFilter style={styles.BioFilter}></BioFilter>
          <PaperFilter style={styles.PaperFilter}></PaperFilter> */}
          {/* <Text>bebra</Text> */}
        </SafeAreaView>
      </ScrollView>

      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 47.21578446352277,
            longitude: 38.92089923118503,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          // region={this.state.region}
        ></MapView>
        {/* <Marker
      // key={index}
      coordinate={{latitude: 47.21578446352277,
        longitude:  38.92089923118503}}
      title={"Hello, Taganrog"}
      // description={marker.description}
    /> */}
      </View>
      {/* <MapView></MapView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: screenHeight,
    // width: screenWidth,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    //
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: '#fff',
  },
  Filters: {
    height: 50,
    width: 50,
    // flex:1,
    elevation: 3,
    borderRadius: 40,
    marginTop: 140 * coefficientHeight,
    // alignSelf: "flex-end",
    // position: 'relative',
    // marginLeft:screenWidth-(50*coefficientWidth),
    alignSelf: "flex-end",
    marginRight: 10 * coefficientWidth,
  },
  FilersScroll: {
    elevation: 2,
    height: 145 * coefficientHeight,
    width: screenWidth,
    marginBottom: 100 * coefficientHeight,
    backgroundColor: colors.backgroundGr,
    position: "absolute",
  },

  FilersAreaWrapper: {
    marginHorizontal: 20 * coefficientWidth,
    height: 130 * coefficientHeight,
  },
  PlasticFilterWrapper: {
    width: 117 * coefficientWidth,
    height: 96 * coefficientHeight,
    // backgroundColor: colors.backgroundGr,
    position: "absolute",
    marginTop: 25 * coefficientHeight,
  },
  BioFilterWrapper: {
    width: 97 * coefficientWidth,
    height: 96 * coefficientHeight,
    // backgroundColor: colors.backgroundGr,
    position: "absolute",
    marginTop: 25 * coefficientHeight,
    alignSelf: "center",
  },
  PaperFilterWrapper: {
    width: 96 * coefficientWidth,
    height: 96 * coefficientHeight,
    // backgroundColor: colors.backgroundGr,
    position: "absolute",
    marginTop: 25 * coefficientHeight,
    alignSelf: "flex-end",
  },
});
