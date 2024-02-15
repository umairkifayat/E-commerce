import axios from 'axios'
import React from 'react'

const App = () => {

   axios.get('https://dummyjson.com/products') 
   .then((res)=>{
    console.log(res.data);
   })

  return (
    <div>
      hello world
      </div>
  )
}

export default App
