import React from 'react';

class ItemListContainer extends React.Component{
    render (){
        return <div style={{color:"green", fontSize:"larger", fontWeight:"bolder"}}>{this.props.nombre}, en tu carrito tenés los siguientes productos...</div>
    }
}

export default ItemListContainer;