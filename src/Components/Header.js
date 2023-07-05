
const Header= ()=> {
const imgLogoPokemon = "https://www.freepnglogos.com/uploads/pokemon-logo-text-png-7.png"

return(
    <div className=" d-flex flex-row justify-content-start align-items-center m-5 bg-danger">
        <img  width="20%" height="auto" src={imgLogoPokemon}/> 
        <button type="button" className=" btn btn-secondary ">Dark Theme</button>
    </div>
)
}

export default Header