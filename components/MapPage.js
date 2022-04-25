import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Modal,
  Animated,
  Image,
  viewBox,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
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
import React, { useState, Component } from "react";

import Filters from "../assets/images/Filters";
import PlasticFilter from "../assets/images/PlasticFilter";
import BioFilter from "../assets/images/BioFilter";
import PaperFilter from "../assets/images/PaperFilter";
import PlasticFilterActive from "../assets/images/PlasticFilterActive";
import BioFilterActive from "../assets/images/BioFilterActive";
import PaperFilterActive from "../assets/images/PaperFilterActive";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const defaultWidth = 390;
const defaultHeight = 844;
const bebra = 20;
const coefficientWidth = screenWidth / defaultWidth;
const coefficientHeight = screenHeight / defaultHeight;
// import SwipeContainer from 'react-native-scroll-up-container'
// import Modal from "react-native-modal";

export default function MapPageConst({ navigation }) {
  const [showModal, setshowModal] = useState(false);
  const onPressButton = () => {
    setshowModal(!showModal), console.log(showModal);
  };

  const [PlasticFilterShowActive, setPlasticFilterShowActive] = useState(false);
  const onPressFilterPlastic = () => {
    setPlasticFilterShowActive(!PlasticFilterShowActive),
      console.log(PlasticFilterShowActive);
  };

  const [BioFilterShowActive, setBioFilterShowActive] = useState(false);
  const onPressFilterBio = () => {
    setBioFilterShowActive(!BioFilterShowActive),
      console.log(BioFilterShowActive);
  };

  const [PaperFilterShowActive, setPaperFilterShowActive] = useState(false);
  const onPressFilterPaper = () => {
    setPaperFilterShowActive(!PaperFilterShowActive),
      console.log(PaperFilterShowActive);
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
  // const scrollX = useRef(new Animated.Value(0)).current;
  // const deltaX = useRef(new Animated.Value(0)).current;
  // const deltaY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.map}>
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

        {/* <SafeAreaView>
          <TouchableOpacity>
            <Text style={styles.Text}>MapPage</Text>
          </TouchableOpacity>
        </SafeAreaView> */}
        {/* <View style={styles.opa}> */}
        <TouchableOpacity style={styles.Filters} onPress={onPressButton}>
          {!showModal ? <Filters /> : null}
        </TouchableOpacity>
        {/* </View> */}
        <Modal
          // animationType="slideInUp"
          animationIn="up"
          animationInTiming={500}
          animationOut="slideOutDown"
          hasBackdrop={1}
          transparent={true}
          style={styles.FilersScroll}
          visible={showModal}
          dismissable={false}
          backdropColor="black"
          swipeDirection="up"
          onRequestClose={() => {
            setshowModal(false);
          }}
          onSwipeComplete={() => setshowModal(false)}
        >
          <View style={styles.FilersAreaWrapper}>
            {/* <TouchableOpacity
              onPress={() =>
                // setPlasticFilterShowActive('true'),
                PlasticFilterShowActive ? (
                  <PlasticFilterActive style={styles.PlasticFilterWrapper} />
                ) : (
                  <PlasticFilter
                    style={styles.PlasticFilterWrapper}
                  ></PlasticFilter>, onPressFilter()
                )
              }
            ></TouchableOpacity> */}

            {PlasticFilterShowActive ? (
              <TouchableOpacity
                onPress={onPressFilterPlastic}
                style={styles.PlasticFilterWrapper}
              >
                <PlasticFilterActive style = {styles.Plastic}/>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={onPressFilterPlastic}
                style={styles.PlasticFilterWrapper}
              >
                <PlasticFilter style = {styles.Plastic}/>
              </TouchableOpacity>
            )}

            {BioFilterShowActive ? (
              <TouchableOpacity
                onPress={onPressFilterBio}
                style={styles.BioFilterWrapper}
              >
                <BioFilterActive style = {styles.Bio}/>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={onPressFilterBio}
                style={styles.BioFilterWrapper}
              >
                <BioFilter style = {styles.Bio}/>
              </TouchableOpacity>
            )}

            {PaperFilterShowActive ? (
              <TouchableOpacity
                onPress={onPressFilterPaper}
                style={styles.PaperFilterWrapper}
              >
                <PaperFilterActive style = {styles.Paper}/>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={onPressFilterPaper}
                style={styles.PaperFilterWrapper}
              >
                <PaperFilter style = {styles.Paper}/>
              </TouchableOpacity>
            )}

            {/* 
            <TouchableOpacity style={styles.BioFilterWrapper}>
              <BioFilter />
            </TouchableOpacity>
            <TouchableOpacity style={styles.PaperFilterWrapper}>
              <PaperFilterActive />
            </TouchableOpacity> */}
            {/* <View style={styles.PlasticFilterWrapper}></View>
          <View style={styles.BioFilterWrapper}></View>
          <View style={styles.PaperFilterWrapper}></View> */}
            {/* <PlasticFilter style={styles.PlasticFilter}></PlasticFilter>
          <BioFilter style={styles.BioFilter}></BioFilter>
          <PaperFilter style={styles.PaperFilter}></PaperFilter> */}
            {/* <Text>bebra</Text> */}
          </View>

          <View>
            <TouchableOpacity
              style={styles.FiltersSecond}
              onPress={onPressButton}
            >
              {showModal ? <Filters /> : null}
            </TouchableOpacity>
          </View>

        </Modal>
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
    // flex: 1,
    // justifyContent: "flex-end",
    alignItems: "center",
    elevation: -1,
    //
  },
  Text: {
    fontSize: 20,
    elevation: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: '#fff',
  },
  opa: {
    // elevation: 3,
    // flex:1,
  },
  ModalWrapper: {},
  Filters: {
    alignSelf: "flex-end",
    position: "absolute",
    marginTop: 190 * coefficientHeight,
    paddingRight: 10 * coefficientHeight,
  },
  FiltersSecond: {
    alignSelf: "flex-end",
    position: "absolute",
    marginTop: 14 * coefficientHeight,
    paddingRight: 10 * coefficientHeight,
  },
  FilersScroll: {
    elevation: 2,
    height: 200 * coefficientHeight,
    width: screenWidth,
    marginBottom: 100 * coefficientHeight,
    // backgroundColor: colors.backgroundGr,
    position: "absolute",
    // overlayAccessibilityLabel: 'Close modal',
  },

  FilersAreaWrapper: {
    // marginHorizontal: 20 * coefficientWidth,
    // alignItems:''

    height: 150 * coefficientHeight,
    width: screenWidth,
    backgroundColor: colors.backgroundWh,
  },
  PlasticFilterWrapper: {
    
    //
    position: "absolute",
    marginTop: 25 * coefficientHeight,
    marginLeft: 20 * coefficientWidth,
  },
  Plastic:{
    width: 117 * coefficientWidth,
    height: 96 * coefficientHeight,
  },
  BioFilterWrapper: {
    
    // backgroundColor: colors.backgroundGr,
    position: "absolute",
    marginTop: 25 * coefficientHeight,
    alignSelf: "center",
  },
  Bio:{
    width: 97 * coefficientWidth,
    height: 96 * coefficientHeight,
  },
  PaperFilterWrapper: {
    width: 96 * coefficientWidth,
    height: 96 * coefficientHeight,
    // backgroundColor: colors.backgroundGr,
    position: "absolute",
    marginTop: 25 * coefficientHeight,
    alignSelf: "flex-end",
    right: 20 * coefficientWidth,
  },
  Paper: {
    width: 96 * coefficientWidth,
    height: 96 * coefficientHeight,
  },
});
