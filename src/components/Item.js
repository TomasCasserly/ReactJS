import React from 'react';
import ItemCount from './ItemCount';

export default function Item(props) {
    const {product} = props;
    return (
        <div>
            <img className="small" src={product.foto} alt={product.tipo}></img>
            <h3>{product.tipo} {product.marca}</h3>
            <div>${product.precio}</div>
            <div>
                <ItemCount />
            </div>
        </div>
    )
}
