import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';
import colors from './assets/colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// fonts
import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/inter';  
// navigation
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GetIn from './components/GetIn';
import Authentification from './components/Authentification';
import Navigation from './components/Navigation';

//dlya navigacii
// const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'mt-bold': require('./assets/fonts/SFUIDisplayBold.ttf'),
    'mt-semiBold': require('./assets/fonts/SFUIDisplaySemiBold.ttf'),
    'mt-regular': require('./assets/fonts/SFUIDisplayRegular.ttf'),
    'kr-regular': require('./assets/fonts/SFUIDisplayKronaRegular.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }else {return(
    <Navigation/>
    );
  }
  
  
}
  



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.shitColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
    text:
    {
    fontFamily: 'mt-regular',
    fontSize: 40,
    }
    
  },
);
