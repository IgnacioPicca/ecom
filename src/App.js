import './App.css';
import Footer from './components/footer/Footer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>

      <NavBar />

      <Routes>

        <Route path="/" element={<ItemListContainer />} />

      </ Routes>

      <Footer />
    </Router>
  );
}

export default App;
