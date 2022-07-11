import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
function App() {
  return (
    <>
    <ItemListContainer greeting={"Este es un mensaje provisional"}/>
    <NavBar/>
    </>
  );
}

export default App;
