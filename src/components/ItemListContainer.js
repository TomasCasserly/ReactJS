import React from 'react';
import ItemList from './ItemList';


class ItemListContainer extends React.Component{
    render (){
        return <div style={{color:"green", fontSize:"larger", fontWeight:"bolder"}}>{this.props.nombre}, en tu carrito tenés los siguientes productos...<ItemList/>
        </div>
    }
}

export default ItemListContainer;