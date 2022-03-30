import { StyleSheet, Text, View, Dimensions, Image, viewBox, TouchableOpacity  } from 'react-native';
import colors from '../assets/colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Svg from 'react-native-svg';
// import MapView from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 
import  { Marker } from 'react-native-maps'; 
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
        <View style = {{flex: 1}}>
          <Text>MapPage</Text>
          <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
                latitude:  47.21578446352277,
                longitude:  38.92089923118503,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            }}
            // region={this.state.region}
          >
     </MapView>
     <Marker
      // key={index}
      coordinate={{latitude: 47.21578446352277,
        longitude:  38.92089923118503}}
      title={"Hello, Taganrog"}
      // description={marker.description}
    />
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
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // 
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: '#fff',
  },
 });