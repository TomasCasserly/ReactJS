import React, {useState} from 'react';


const ItemListContainer = () => {
  

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