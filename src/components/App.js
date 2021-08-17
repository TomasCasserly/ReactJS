import React, { Component } from 'react';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ItemCount from './ItemCount';
import ItemDetailContainer from './ItemDetailContainer';


class App extends Component {
  render() {
    return (
      
      <div>
        <NavBar/>
        <ItemListContainer nombre="Tom"/>
        <ItemCount/>
        <ItemDetailContainer/>
      </div>
);
  }
}
export default App;