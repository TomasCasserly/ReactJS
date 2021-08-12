import React from 'react';
import Item from './Item';

function ItemList (){

    const ProdDetails = () =>
        new Promise ((resolve, reject)=>{
        setTimeout(() =>{
            resolve("Acá está el resultado")

            }, 2000);
        });

        ProdDetails().then(
            (result) => {
                if (result != "Acá está el resultado"){
                    throw new Error("Le pifiaste, macho")
                }

            },
            (err) => console.log(err)
        );

    
        return <div>
            <button onClick={ProdDetails}>Ver detalles</button>
            <Item/>
        </div>
    
}

export default ItemList;