import {  setTheme } from "../context"

const Header= ()=> {
const imgLogoPokemon = "https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png"

return(
    <div className=" d-flex d-flex justify-content-around p-3 bg-danger">
        <img  width="20%" height="auto" src={imgLogoPokemon}/> 
        <button type="button" className=" btn btn-secondary " onClick={()=> setTheme(true)} >Dark Theme</button>
    </div>
)
}

export default Header