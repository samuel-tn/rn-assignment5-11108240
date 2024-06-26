import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ThemeContext } from "./components/ThemeContext";
import IconButton from "./components/IconButton";

const SettingsScreen = () => {
    const { isDarkTheme, toggleTheme } = React.useContext(ThemeContext);
    const styles = isDarkTheme ? darkStyles : lightStyles;
    return (
        <View styles={styles.container}>
            <Text style={styles.text}>Settings</Text>
            <IconButton title="Theme" onPress={toggleTheme} />
        </View>
    );
};
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

export default SettingsScreen;