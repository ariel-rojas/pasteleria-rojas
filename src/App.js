import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


import PokeAPIExample from './examples/PokeAPIExample';


function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer/>
      {/* <PokeAPIExample/> */}
    </>

  );
}

export default App;
