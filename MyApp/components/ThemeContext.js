import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
    
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    useEffect(() => {
        const loadTheme = async () => {
            const savedTheme = await AsyncStorage.getItem('theme');
            if (savedTheme !== null) {
                setIsDarkTheme(savedTheme === 'dark');
            }
        };
        loadTheme();
    }, []);
    const toggleTheme = async () => {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        await AsyncStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };
    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );

};