import React, {useContext} from 'react';
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { ThemeContext } from "./ThemeContext";

const IconButton = ({ title, onPress }) => {
    const { isDarkTheme } = useContext(ThemeContext);
    const buttonStyles = isDarkTheme ? darkStyles : lightStyles;
    return(
        <TouchableOpacity style={StyleSheet.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const lightStyles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: "#6200ea",
        borderRadius: 5,
        alignItems: "flex-start",
        margin: 10,
    },
    text: {
        color: "white",
        fontSize: 16,
    },
});

const darkStyles = StyleSheet.create({
    button: {
        padding: 10,
        backgroundColor: "#bb86fc",
        borderRadius: 5,
        alignItems: "flex-start",
        margin: 10,
    },
    text: {
        color: "black",
        fontSize: 16,
    },
});
export default IconButton;