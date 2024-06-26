import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ThemeProvider, ThemeContext } from './components/ThemeContext';
import Homescreen from './Homescreen';
import SettingsScreen from '../SeetingsScreen';
import { useContext } from "react";

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
   <NavigationContainer theme={isDarkTheme ? darkTheme : lightTheme}>
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Homescreen} />
      <Tab.Screen name='Settings'> {() => <SettingsScreen toggleTheme={toggleTheme} />}
      </Tab.Screen>
      </Tab.Navigator>
   </NavigationContainer>
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
  


