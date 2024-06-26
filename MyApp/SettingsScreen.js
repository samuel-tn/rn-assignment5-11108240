import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { ThemeContext } from "./components/ThemeContext";

const SettingsScreen = () => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
    const styles = isDarkTheme ? darkStyles : lightStyles;
    return (
        <View styles={styles.container}>
            <Text style={styles.text}>Settings</Text>
            <Button title="Theme" onPress={toggleTheme} />
        </View>
    );
};
export default function SettingsScreen() {};
const lightStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "white",
    },
    text: {
        fontsize: 20,
        color: "black",
    },
});

const darkStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "black",
    },
    text: {
        fontsize: 20,
        color: "white",
    },
});

