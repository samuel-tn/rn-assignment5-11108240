import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeProvider, ThemeContext } from './components/ThemeContext';
import Homescreen from './Homescreen';
import SettingsScreen from "./SettingsScreen";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider } from "styled-components/native";
import { useContext } from "react";
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}> 
   <NavigationContainer theme={isDarkTheme ? darkTheme : lightTheme}>
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Homescreen} />
      <Tab.Screen name='Settings' component={SettingsScreen}/>
      </Tab.Navigator>
   </NavigationContainer>
   </ThemeProvider>
  );
};

const lightTheme = {
  dark: false,
  colors: {
    primary: 'white',
    background: 'white',
    card: 'white',
    text: 'black',
    border: 'gray',
  },
};
const darkTheme = {
  dark: true,
  colors: {
    primary: 'black',
    background: 'black',
    card: 'black',
    text: 'white',
    border: 'gray',
  },
};

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigator/>
    </ThemeProvider>
  );
  }
  


