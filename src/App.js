
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return ( 
    <div className='app'>
    <NavBar />
    <ItemListContainer />
    <h1>Bienvenido Alan Norma</h1>
    <ItemListContainer />
  </div>
  );
}

export default App;
