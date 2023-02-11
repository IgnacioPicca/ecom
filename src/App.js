import './App.css';
import Footer from './components/footer/Footer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import NavBar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Index from './components/index/Index';
import NotFound from './components/404/NotFound';
import { CartContextProvider } from './storage/CartContext';
import CartContainer from './components/cartContainer/CartContainer';
import OrderDetail from './components/orderDetail/OrderDetail';
import { exportData } from './services/firebase';


function App() {
  return (
    <>
      <CartContextProvider >
        <Router>
          <NavBar />

          <Routes>

            <Route path="/" element={<Index />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/thank-s2/:orderId" element={<OrderDetail />} />
            <Route path="*" element={<NotFound />} />

          </ Routes>

          <Footer />
        </Router>
      </CartContextProvider>
    </>
  );
}

export default App;
