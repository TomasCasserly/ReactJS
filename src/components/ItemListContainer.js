import React from 'react';

class ItemListContainer extends React.Component{
    render (){
        return <div style={{color:"green", fontSize:"larger", fontWeight:"bolder"}}>{this.props.nombre}, en tu carrito tenés las siguientes cosas...</div>
    }
}

export default ItemListContainer;