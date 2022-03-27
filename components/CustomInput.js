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


const CustomInput = ({value, setValue, placeholder}) => {
    let [fontsLoaded] = useFonts({
        'mt-bold': require('../assets/fonts/SFUIDisplayBold.ttf'),
        'mt-semiBold': require('../assets/fonts/SFUIDisplaySemiBold.ttf'),
        'mt-regular': require('../assets/fonts/SFUIDisplayRegular.ttf'),
        'kr-regular': require('../assets/fonts/SFUIDisplayKronaRegular.ttf'),
      })
      if (!fontsLoaded) {
        return <AppLoading />;
    }else {
    return (
        <View>
            <TextInput  style ={styles.inputButtonText}
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                //secureTextEntry={secureTextEntry}
            />
        </View>
    );
    }
};



const styles = StyleSheet.create(
    {
        inputButtonText:{
        height:coefficientHeight* 52,
        width:coefficientWidth* 320,
        borderRadius:50,
        fontFamily: 'mt-regular',
        alignSelf: 'flex-start',
        marginLeft:1*coefficientWidth,
        padding: 17,
        marginTop: coefficientHeight* 1,
        fontSize: 20*coefficientHeight,
        // placeholderTextColor: colors.grayLight,
        color: colors.blackText,
        },

    });

export default CustomInput;