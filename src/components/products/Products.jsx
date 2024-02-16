import React from 'react'
import axios from 'axios'
import  { useState, useEffect } from 'react'

const Products = () => {
     // useState
//   const [array, setArray] = useState([])




//   create function  for add to cart
const addcart = () =>{
    axios.get('https://dummyjson.com/products')
      .then((res) => {
        setArray(res.data.products)
      }).catch((error) => {
        console.log(error);
      })

}


  console.log(array);
  return (
    <div>
    <h1 className='text-center'>E-commerce store</h1>
    <div className=' container'>
      {array.map((item, index) => (
        <div key={index} className='card m-0 p-[5px]' >
          {!item.images ? 'images not found' : <img src={item.thumbnail} className='card-img-top' alt='' style={{ width: '80%' }} />}
         

          <div className='card-body '>
            <h5 className='card-title'>{item.brand}</h5>

            <p className='card-text'>Price: ${item.price}</p>
            <button onClick={addcart}>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Products
