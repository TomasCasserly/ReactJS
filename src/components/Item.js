import React from 'react';

class Item extends React.Component {
    constructor (props){
      super(props);
  
    }
  
    render() {
        const data =[{"name":"Ojotas"},{"name":"Alpargatas"}];
        return (
          <div>
          {data.map(function(d, idx){
             return (<li key={idx}>{d.name}</li>)
           })}
          </div>
        );
      }
  }

  export default Item;