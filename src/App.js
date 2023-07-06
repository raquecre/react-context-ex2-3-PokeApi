
import './App.css';
//import PokeContextProvider from './context';
import Header from './Components/Header';
import Main from './Components/Main';
import 'bootstrap/dist/css/bootstrap.css';

import { useContext } from "react"
import { ThemeContext} from "./context"

//import PokeCards from './Components/PokeCards';
function App() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
      <div className={`App ${theme}`}>
        <Header />
        <Main />
      </div>
  );
}

export default App;
