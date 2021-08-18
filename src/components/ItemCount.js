import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const add = () => {
    if (count >=8) {
      return;
    } else {
      setCount(count + 1);
    }
  }

  const dec = () => {
    if (count <=0) {
      return;
    } else {
      setCount(count - 1);
    }
  }

  return (
    <div>
      
    <div style={{padding: '10px', border: 'solid black 1px', borderRadius: '25px', display: 'flex', justifyContent: 'space-evenly', backgroundColor: "lightblue", width: '400px', height: '60px', marginLeft: 'auto', marginRight: 'auto'}}>
      <button onClick={add}>Agregar</button>
      <h2>{count}</h2>
      <button onClick={dec}>Quitar</button>
    </div>
    <p style={{color: 'white', marginTop: '10px', border: 'solid black 1px', borderRadius: '25px', display: 'flex', justifyContent: 'space-evenly', backgroundColor: "grey", width: '100px', marginLeft: 'auto', marginRight: 'auto'}}>8 en stock</p>
    </div>
  );
}

export default Counter;
