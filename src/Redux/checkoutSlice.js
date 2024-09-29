import { createSlice } from "@reduxjs/toolkit";



const productDetalis ={ 
    title: "Mens Cotton Jacket",
    category: "men's clothing",
    description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. ",
    price:2000,
    onSale:'true',
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
            "rate": 4.7,
            "count": 500
        }
}



const checkoutSlice = createSlice({
    name:'chickout',
    initialState:{

        productDetalis:productDetalis
        
    }
})

export const checkoutReducer = checkoutSlice.reducer