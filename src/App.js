import logo from './logo.svg';
import './App.css';
import IndexContainer from './components/IndexContainer';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      {/* <IndexContainer/> */}
      <Routes>
        <Route index element={<ItemListContainer/>}/>
        <Route path='/category/:name' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element = {<ItemDetailContainer/>}></Route>
        <Route path= '/cart' element={<div> Cart Page</div>}/>
        <Route path='*' element={<div>ERROR</div>}/>
      </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
