import { ThemeContext } from "../context"
import {  Theme } from "../context"
import Pokelist from "./Pokelist"

 const Main = () => {

    return (
        <div className={Theme ? ` text-light bg-dark ` : ` bg-light text-dark`}>
            <Pokelist />
        </div>
    )
}


export default Main 