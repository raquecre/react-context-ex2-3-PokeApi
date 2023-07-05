import logo from './logo.svg';
import './App.css';
import PokeContextProvider from './context';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <PokeContextProvider>
        <Main />
      </PokeContextProvider>
    </div>
  );
}

export default App;
