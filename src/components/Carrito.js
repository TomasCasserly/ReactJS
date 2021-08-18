import React from 'react'

export default function Carrito(props) {
    const {cartItems} = props;
    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Carrito vacío</div>}
            </div>
        </aside>

    )
}
