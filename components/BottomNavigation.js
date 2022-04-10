import * as React from 'react'
import { Button, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator, BottomTabBar} from "@react-navigation/bottom-tabs"

import MapPage from './MapPage'; 
import NewsPage from './NewsPage'; 
import BookPage from './BookPage'; 
import UserPage from './UserPage'; 

import IconMapPressed from '../assets/images/IconMapPressed';
import IconMapNoPressed from '../assets/images/IconMapNoPressed';
import IconNewsPressed from '../assets/images/IconNewsPressed';
import IconNewsNoPressed from '../assets/images/IconNewsNoPressed';
import IconBookPressed from '../assets/images/IconBookPressed';
import IconBookNoPressed from '../assets/images/IconBookNoPressed';
import IconUserPressed from '../assets/images/IconUserPressed';
import IconUserNoPressed from '../assets/images/IconUserNoPressed';


const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator tabBarOptions ={{showLabel: false, headerShown: false}}>
      <Tab.Screen 
                name="MapPage" 
                component={MapPage} 
                options={{  
                    tabBarIcon: ({focused}) =>(
                        focused ? <IconMapPressed/> : <IconMapNoPressed/>
                    ),
                    title: 'Welcome',
                    headerShown: false}} />
        <Tab.Screen 
                name="NewsPage"
                component={NewsPage} 
                options={{  
                    tabBarIcon: ({focused}) =>(
                        focused ? <IconNewsPressed/> : <IconNewsNoPressed/>
                    ),
                    title: 'Welcome',
                    headerShown: false}} />
        <Tab.Screen 
                name="BookPage" 
                component={BookPage} 
                options={{  
                    tabBarIcon: ({focused}) =>(
                        focused ? <IconBookPressed/> : <IconBookNoPressed/>
                    ),
                    title: 'Welcome',
                    headerShown: false}} />
        <Tab.Screen 
                name="UserPage" 
                component={UserPage} 
                options={{  
                    tabBarIcon: ({focused}) =>(
                        focused ? <IconUserPressed/> : <IconUserNoPressed/>
                    ),
                    title: 'Welcome',
                    headerShown: false}} />
    </Tab.Navigator>
  );
}

  