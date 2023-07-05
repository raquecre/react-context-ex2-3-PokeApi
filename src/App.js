
import './App.css';
//import PokeContextProvider from './context';
import Header from './Components/Header';
import Main from './Components/Main';
import 'bootstrap/dist/css/bootstrap.css';
import ThemesContextProvider from './context';
//import PokeCards from './Components/PokeCards';
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
     {/*  <ThemesContextProvider>
        <Main />
      </ThemesContextProvider> */}
    </div>
  );
}

export default App;
