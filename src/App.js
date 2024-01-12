import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Route,Routes} from "react-router-dom"
import Products from './component/Products';
import About from './component/About';
import Product from './component/Product';
import Cart from './component/Cart';
import Login from './component/Login';
import Contact from './component/Contact';
import Register from './component/Register';
import Checkout from './component/Checkout';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route  path="/login" element={<Login/>} />
        <Route  path="/" element={<Home/>} />
        <Route  path="/products" element={<Products/>} />
        <Route  path="/about" element={<About/>} />
        <Route  path="/products/:id" element={<Product/>} />
        <Route  path="/cart" element={<Cart/>} />
        <Route  path="/contact" element={<Contact/>} />
        <Route  path="/register" element={<Register/>} />
        <Route  path="/checkout" element={<Checkout/>} />
    </Routes>
    
    </>
  );
}

export default App;
