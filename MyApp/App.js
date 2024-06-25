import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homescreen from './Homescreen';
import SettingsScreen from './SettingsScreen';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Homescreen} />
      <Tab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
   </NavigationContainer>
  );
}

