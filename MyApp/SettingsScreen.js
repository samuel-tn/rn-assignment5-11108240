import React from "react";
import { View, Text, Switch } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "styled-components/native";

const SettingsScreen = ({ toggleTheme}) => {
    const theme = useTheme();
    return (
        <View>
            <Text>Settings Screen</Text>
            <Switch value={theme.mode === 'dark'}
            onValueChange={toggleTheme} />
        </View>
    );
};
export default SettingsScreen;