import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homescreen from './Homescreen';
import SettingsScreen from "./SettingsScreen";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider } from "styled-components/native";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
const Tab = createBottomTabNavigator();
const lightTheme = {
  mode: 'light',
  background: '#ffffff',
  text: '#000000',
};
const darkTheme = {
  mode: 'dark',
  background: '#000000',
  text: '#ffffff',
}

export default function App() {
  const [theme, setTheme] = useState(lightTheme);
  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme === 'dark' ? darkTheme : lightTheme);
      }
    };
    loadTheme();
  }, []);
  const toggleTheme = async () => {
    const newTheme = theme.mode === 'light' ? darkTheme : lightTheme;
    setTheme(newTheme);
    await AsyncStorage.setItem('theme', newTheme.mode);
  };
  return (
    <ThemeProvider theme={theme}> 
   <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Homescreen} />
      <Tab.Screen name='Settings'>
      { () => <SettingsScreen toggleTheme={toggleTheme} />} 
       </Tab.Screen> 
      </Tab.Navigator>
   </NavigationContainer>
   </ThemeProvider>


  );
}

