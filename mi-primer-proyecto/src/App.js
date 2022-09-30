import logo from './logo.svg';
import './App.css';
import {Navbar} from './componets/Navbar/Navbar';
import {ItemListContainer} from './componets/itemlistcontainer/itemlistcontainer'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <ItemListContainer greeting="Lista Productos"/>
    </div>
  );
}

export default App;
