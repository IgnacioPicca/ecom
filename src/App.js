import './App.css';
import Footer from './components/footer/Footer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Index from './components/index/Index';
import NotFound from './components/404/NotFound';

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>

        <Route path="/" element={<Index />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />

        <Route path="*" element={<NotFound />} />

      </ Routes>

      <Footer />
    </Router>
  );
}

export default App;
