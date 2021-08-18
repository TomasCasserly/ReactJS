import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import "./CompStyle.css";
import Carrito from "./Carrito";
import data from "./Data";
import ItemList from "./ItemList";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
        <NavBar />
      <Switch>
        <div className="row">
          <Route path="/itemlist">
            <ItemList products={products} />
          </Route>
          <Route path="/carrito">
            <Carrito cartItems={cartItems} />
          </Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
