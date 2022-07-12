import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Card from './components/Card';

function App() {
  return (
    <>
    <ItemListContainer greeting={"Este es un mensaje provisional"}/>
    <NavBar/>
    <Card/>
    </>

  );
}

export default App;
