import React from 'react';
import ItemList from './ItemList'

function Item(){
  return(
    <div>
      <h2><ItemList/></h2>
    </div>

  )
}

  export default Item;


  // class Item extends React.Component {
  //   // constructor (props){
  //   //   super(props);
  
  //   // }
  
  //   render() {
  //       const data =[{"name":"Ojotas", "size": "43", "color":"verde"},{"name":"Alpargatas", "size": "42", "color":"azul"}];
  //       return (
  //         <div>
  //         {data.map(function(prod, id){
  //            return (<li key={id}>{prod.name} - Color {prod.color} - Talle: {prod.size}</li>)
  //          })}
  //         </div>
  //       );
  //     }
  // }