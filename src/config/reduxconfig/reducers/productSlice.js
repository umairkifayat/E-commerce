import { createSlice, nanoid } from "@reduxjs/toolkit"; 


const productSlice = createSlice({
    name: 'Products',
    initialState:{
        products:[{
            id: nanoid()
        }]
    },
    reducers:{

        addproducts:(state,action)=>{
            state.products.push({
                ...action,
              id:  nanoid(),
            })
        }
    }
})
export const {addproducts} = productSlice.actions
export default productSlice.reducer