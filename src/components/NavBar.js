
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
  
export default function NavBar() {
  return (
    <div>
      <header className="row block center">
        <div>
          <a href="#/">
            <h1>Proyecto Casserly</h1>
          </a>
        </div>
        <div>
        <Link to="/navbar">Home</Link> <Link to="/itemlist">Products</Link> <Link to="/carrito">Carrito</Link> <a  href="#/signin">Sign In</a>
        </div>
        <CartWidget />

      </header>

      
    </div>
  );
}
