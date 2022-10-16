import logo from './logo.svg';
import './App.css';
import {Navbar} from './componets/Navbar/Navbar';
import {ItemListContainer} from './componets/itemlistcontainer/itemlistcontainer';
import { Itemlist } from './componets/itemList/itemList';
import { QuienesSomos } from './componets/QuinesSomosPage/QuienesSomosPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <div>
      <Navbar/>
      <Routes>
        <Route path='/inicio' element={<ItemListContainer/>}/>
        <Route path='/quienesSomos' element={<QuienesSomos/>}/>
      </Routes>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
