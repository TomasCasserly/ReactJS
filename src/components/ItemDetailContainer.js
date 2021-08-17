import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function ItemDetailContainer(){

    const [photo, setComments] = useState([])
    useEffect(() => {
        fetchComments();
    })

    const fetchComments=async()=>{
        const response=await Axios('https://jsonplaceholder.typicode.com/photos?_limit=10');
        setComments(response.data)
    }




    return (
        <div>
          {
            photo && photo.map(photo=>{
              return(
                <div key={photo.id} style={{alignItems:'center',margin:'20px 60px'}}>
                <h4>{photo.title}</h4>
                <img alt="pHotos" src={photo.thumbnailUrl}></img>
              </div>
              )
    
            })
          }
        </div>
    )
}

export default ItemDetailContainer;