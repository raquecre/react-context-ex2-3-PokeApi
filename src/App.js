
import './App.css';
//import PokeContextProvider from './context';
import Header from './Components/Header';
import Main from './Components/Main';
import 'bootstrap/dist/css/bootstrap.css';
import ThemeContextProvider from './context';
//import PokeCards from './Components/PokeCards';
function App() {
  
  return (
    <div className="App">
      <ThemeContextProvider>
      <Header />
        <Main />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
