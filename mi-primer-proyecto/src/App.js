import logo from './logo.svg';
import './App.css';
import {Navbar} from './componets/Navbar/Navbar';
import {ItemListContainer} from './componets/itemlistcontainer/itemlistcontainer';
import { Itemlist } from './componets/itemList/itemList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <div>
      <Navbar/>
      <ItemListContainer />
      <Routes>
        
      </Routes>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
