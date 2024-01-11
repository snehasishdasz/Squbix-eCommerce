import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Route,Routes} from "react-router-dom"
import Products from './component/Products';
import About from './component/About';
import Product from './component/Product';
import Cart from './component/Cart';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/products" element={<Products/>} />
        <Route  path="/about" element={<About/>} />
        <Route  path="/products/:id" element={<Product/>} />
        <Route  path="/cart" element={<Cart/>} />
    </Routes>
    
    </>
  );
}

export default App;
