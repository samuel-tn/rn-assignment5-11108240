import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

const SettingsScreen = () => {
    const theme = useTheme();
    return (
        <View styles={styles.container}>
            <Text style={styles.text}>Settings</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontsize: 20,
    },
});

export default SettingsScreen;