import React, { useEffect }  from "react";
import { createContext, useState } from "react"

export const ThemeContext = createContext('light');

export default function ThemeContextProvider({ children }) {

    const [theme, setTheme] = useState("");
    const toogleTheme = (event) => {
        setTheme(theme === "light" ? "dark" :"light" )
    }

    return (
        <ThemeContext.Provider value={{theme, setTheme, toogleTheme}}>
           { children }
        </ThemeContext.Provider>
    )
}



