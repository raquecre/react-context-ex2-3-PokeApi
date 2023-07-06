import { createContext } from "react"
import { ThemeContext, toogleTheme } from "../context"
import { useContext } from "react"


const Header = () => {
    const imgLogoPokemon = "https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png"
    const {toogleTheme} = useContext(ThemeContext);
    return (
        <div className=" d-flex d-flex justify-content-around p-3 bg-danger">
            <img width="20%" height="auto" src={imgLogoPokemon} />

            <select onChange={event => toogleTheme(event.target.value)}>
                <option  value="dark"> Dark </option>
                <option value="light"> Light </option>
            </select>
            {/*         <button type="button" className=" btn btn-secondary " onClick={( )=> ThemeContext(true)} >Dark Theme</button>
 */}    </div>
    )
}

export default Header

