import React from 'react';
import ItemListContainer from './Item';

function ItemList(){

    const productos = () =>{



    }


        return(
        <div>
            {producto.map(p => <ItemListContainer p={p}/>)}


        </div>
        )
    }
















// FUNCIÓN DE PLURALSIGHT
// import React from "react";
// import Item from './Item';

// class ItemList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: ""
//     };
//   }

//   handleButtonClick = () => {
//     const fetchUserEmail = async () => {
//       const response = await fetch(<Item/>);
//       const { email } = await response.json();
//       this.setState({
//         email
//       });
//     };
//     fetchUserEmail();
//   };

//   render() {
//     return (
//       <div>
//         <h1>A user</h1>
//         <p>{this.state.email}</p>
//         <button onClick={this.handleButtonClick}>Fetch Email</button>
//       </div>
//     );
//   }
// }


// MI FUNCIÓN ORIGINAL!!!!!!!!!!!!!!!!!!!!!!1

// function ItemList (){

//     const ProdDetails = () =>
//         new Promise ((resolve, reject)=>{
//         setTimeout(() =>{
//             resolve("Acá está el resultado")

//             }, 2000);
//         });

//         ProdDetails().then(
//             (result) => {
//                 if (result !== "Acá está el resultado"){
//                     throw new Error("Le pifiaste, macho")
//                 }

//             },
//             (err) => console.log(err)
//         );

    
//         return <div>
//             <button onClick={ProdDetails}>Ver detalles</button>
//             <Item/>
//         </div>
    
// }

export default ItemList;