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

import NameAlert from './NameAlert';

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
        <SafeAreaView>
            <Text>BookPage</Text>
            <NameAlert></NameAlert>
        </SafeAreaView>
      );
}