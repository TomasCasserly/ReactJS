import React, { Component } from 'react';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';

class App extends Component {
  render() {
    return (
      
      <div>
        <NavBar/>
        <ItemListContainer nombre="Tom"/>
      </div>
);
  }
}
export default App;