import { createContext } from "react"
import { ThemeContext, useContext } from "../context"
import { theme } from "../context"
import Pokelist from "./Pokelist"

const Main = () => {/* 
    const { theme, setTheme } = useContext(ThemeContext);
 */
    return (
        <div /* className={`Main` + theme} */>
            <Pokelist />
        </div>
    )
}


export default Main 