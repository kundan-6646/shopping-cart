import Cart from "./components/Cart";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import { useState } from "react";
import axios from "axios";

function App() {
  let [active, setActive] = useState('Home');
  let [products, setProducts] = useState([]);
  let [cartProduts, setCartProduts] = useState([]);

  function addProductToCart(prod) {
    for (let i = 0; i < cartProduts.length; i++) {
      const element = cartProduts[i];
      if(element.id === prod.id) {
        alert('Product is already in the cart.');
        return;
      }
    }
    setCartProduts([...cartProduts, prod]);
  }

  function removeProductToCart(prod) {
    let newCartProd = cartProduts.filter((element) => {
      return element.id !== prod.id;
    })
    setCartProduts(newCartProd);

    console.log(cartProduts);
  }
  
  useState(() => {
    axios.get('https://dummyjson.com/products', {})
    .then(response => setProducts(response.data.products))
    .catch(err => console.log(err))
  }, []);

  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/"><div className="brand">Shopping Cart</div></Link>
          <div className="nav-link">
            <Link to="/"><div className={"nav-link-item " + (active === 'Home' ? 'active' : '')} onClick={()=> {
              setActive('Home');
            }}><span className="material-icons">home</span></div></Link>
            <Link to="/cart"><div className={"nav-link-item " + (active === 'Cart' ? 'active' : '')} onClick={()=> {
              setActive('Cart');
            }}>
            <span className="material-icons">shopping_cart</span>
            <span className="cart-count">{cartProduts.length}</span>
            </div></Link>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home products={products} addProductToCart={addProductToCart} />} />
          <Route path="/cart" element={<Cart products={cartProduts} removeProductToCart={removeProductToCart} />} />
        </Routes>
        {/* Your site footer can go here */}
      </div>
    </Router>
  );
}

export default App;
