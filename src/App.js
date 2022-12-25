import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navbar/Navbar';

function App() {
  return (
    <>

      <NavBar />

      <ItemListContainer text="MacBook Air" subtext="Don't take it lightly." />

    </>
  );

}

export default App;
