import React, {useState} from 'react';
import { StyleSheet, Text, Dimensions, View, SafeAreaView, TextInput } from 'react-native';
import colors from '../assets/colors/colors';
import { useFonts } from '@expo-google-fonts/inter';  
import AppLoading from 'expo-app-loading';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const defaultWidth = 390;
const defaultHeight = 844;
const coefficientWidth = screenWidth/defaultWidth;
const coefficientHeight = screenHeight/defaultHeight;


const CustomInputPassword = ({value, setValue, secureTextEntry}) => {
    let [fontsLoaded] = useFonts({
        'verdana-regular': require('../assets/fonts/Verdana.ttf'),
        'verdana-bold': require('../assets/fonts/Verdana-Bold.ttf'),
      })
      if (!fontsLoaded) {
        return <AppLoading />;
    }else {
    return (
        <View>
            <TextInput  style ={styles.passInputButtonInput}
                value={value}
                onChangeText={setValue}
                placeholder="•••"
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
    }
};


const styles = StyleSheet.create(
    {
    passInputButtonInput:{
        // height:coefficientHeight* 52,
        // width:coefficientWidth* 270,
        borderRadius:50,
        fontFamily: 'verdana-regular',
        alignSelf: 'flex-start',
        marginLeft:1*coefficientWidth,
        padding: 15*coefficientWidth,
        // marginTop: coefficientHeight* 1,
        fontSize: 20*coefficientHeight,
        // placeholderTextColor: colors.grayLight,
        color: colors.grayDark,
        },

    });

    export default CustomInputPassword;