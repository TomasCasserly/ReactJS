import React, { Component } from 'react';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';
import ItemCount from './ItemCount';


class App extends Component {
  render() {
    return (
      
      <div>
        <NavBar/>
        <ItemListContainer nombre="Tom"/>
        <ItemCount/>
      </div>
);
  }
}
export default App;