import './App.css';
import Footer from './components/footer/Footer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <NavBar />

      <ItemListContainer />

      <Footer />
    </>
  );
}

export default App;
