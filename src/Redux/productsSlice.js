// all products data (kol el data el 5asa b el products)

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";




// const productDetalis ={ 
//     name:'T-Shirt',
//     category:'Men Clothes',
//     size:'XL',
//     price:2000
// }

// const [products, setProducts] = useState([]);

 export async function getAllProducts() {
    const { data } = await axios.get("https://fakestoreapi.com/products");

    console.log(data);

    // setProducts(data);
    return data

  }

 const myData = await getAllProducts()
 const myFirstObj = myData[0]
console.log(myFirstObj);

const productsSlice = createSlice({

    name:'productsSlice' ,

    initialState:{ 
        allProducts:myData,
        oneObj:myFirstObj
    }  ,
})


export const productsReducer = productsSlice.reducer