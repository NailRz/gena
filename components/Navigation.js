import React from "react";
import GetIn from '../components/GetIn';
import Authentification from '../components/Authentification';
import ForgotPass from "./ForgotPass";
import Registration from "./Registration";
import ChangePassFirst from "./ChangePassFirst";
import ChangePassSecond from "./ChangePassSecond";
import MapPage from "./MapPage";

import Tabs from "./BottomNavigation";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Navigation() {
        return (
            <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} >
              <Stack.Screen 
              name="GetIn" 
              component={GetIn} 
              options={{  
                title: 'Welcome',
                headerShown: false,
              }} 
              />
              <Stack.Screen
              name="Authentification" 
              component={Authentification} 
              options={{  
                title: 'Authentification',
                headerShown: false,
              }} 
              />
              <Stack.Screen
              name="ForgotPass"
              component={ForgotPass}
              options={{
                title: 'ForgotPass',
                headerShown: false,
              }}
              />
              <Stack.Screen
              name="Registration"
              component={Registration}
              options={{
                title: 'Registration',
                headerShown: false,
              }}
              />
              <Stack.Screen
              name="ChangePassFirst"
              component={ChangePassFirst}
              options={{
                title: 'ChangePassFirst',
                headerShown: false,
              }}
              />
              <Stack.Screen
              name="ChangePassSecond"
              component={ChangePassSecond}
              options={{
                title: 'ChangePassSecond',
                headerShown: false,
              }}
              />
              <Stack.Screen
              name="MapPageScreen"
              component={Tabs}
              options={{
                title: 'MapPage',
                headerShown: false,
              }}
              />
              <Stack.Screen
              name="NewsPage"
              component={Tabs}
              options={{
                title: 'NewsPage',
                headerShown: false,
              }}
              />
              <Stack.Screen
              name="BookPage"
              component={Tabs}
              options={{
                title: 'BookPage',
                headerShown: false,
              }}
              />
              <Stack.Screen
              name="UserPageScreen"
              component={Tabs}
              options={{
                title: 'UserPage',
                headerShown: false,
                // helloyapsix

              }}
              />
            </Stack.Navigator>
          </NavigationContainer>
          );
}