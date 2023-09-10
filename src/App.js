

// import { Navbar } from './components/NavBar'
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer catalogo={'Cargando...'}/>
    </div>
  );
}

export default App;
