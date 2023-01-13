import './App.css';
import CategoryListContainer from './components/categoryListContainer/CategoryListContainer';
import Footer from './components/footer/Footer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <NavBar />

      <CategoryListContainer />

      <Footer />
    </>
  );
}

export default App;
