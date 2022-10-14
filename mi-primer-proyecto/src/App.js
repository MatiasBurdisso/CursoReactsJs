import logo from './logo.svg';
import './App.css';
import {Navbar} from './componets/Navbar/Navbar';
import {ItemListContainer} from './componets/itemlistcontainer/itemlistcontainer';
import { Itemlist } from './componets/itemList/itemList';

function App() {
  return (
  
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <ItemListContainer greeting = "lista" />
      <Itemlist/>
    </div>
    
  );
}

export default App;
