import logo from './logo.svg';
import './App.css';
import {Navbar} from './componets/Navbar/Navbar';
import {ItemListContainer} from './componets/itemlistcontainer/itemlistcontainer';
import {ItemDetailContainer} from './componets/itemDetailcontainer/itemDetailcontainer';
import { Itemlist } from './componets/itemList/itemList';
import { QuienesSomos } from './componets/QuinesSomosPage/QuienesSomosPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import { CartProvider } from '../src/context/CartContext';
import { Cart } from './componets/cart/cart';



function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <div>
      <CartProvider>
      <Navbar/>
      <Routes>
        <Route path='/inicio' element={<ItemListContainer/>}/>
        <Route path='/categoria/:categoryID' element={<ItemListContainer/>}/>
        <Route path='/quienesSomos' element={<QuienesSomos/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/detalle/:detalleID' element={<ItemDetailContainer/>}/>
      </Routes>
      </CartProvider>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
