import React, { useContext } from "react";

export const themes = { 
    dark: {
        color: '#000000' ,
        background: '#ffffff',
        name: 'light',       
    },
    light: {
        color: '#ffffff' ,
        background:  '#181818',
        name: 'dark',      
    }
};

export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
});

export const useThemeContext = () => {
    const theme = useContext(ThemeContext);
    
    if (!theme) return theme.dark;
    return theme;
}
