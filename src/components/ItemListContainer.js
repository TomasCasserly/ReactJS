import React, {useState} from 'react';


const ItemListContainer = () => {
  
const cosas = [
    { tipo : "ojota", marca : "havaianas", talle: "44"},
    { tipo : "alpargata", marca : "toms", talle: "43"},
    { tipo : "sandalia", marca : "reef", talle: "42"}
]

        const [producto, setProducto] = useState ([]);

        const task = () =>
        new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(producto);
            }, 3000);
        });

        task()
        .then(
            (result) =>{
                console.log(result);
            }
            
        )


        return (
          <div>
              {setProducto[cosas]}
          </div>
        );
      }
  

export default ItemListContainer;