// import logo from './logo.svg';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
// import Navbar from './Components/Navbar/Navbar';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import SingleProduct from './Components/SingleProduct/SingleProduct';
import Shop from './Components/Shop/Shop';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import CheckOut from './Components/CheckOut/CheckOut';
import { Provider } from 'react-redux';
import { myStore } from './Redux/myStore';



const myRouter = createBrowserRouter([
  {
    path: '/', element:<Layout/> , children: [
      { index:true, element:  <Home/>  },
      { path: '', element:  <Home/>  },
      { path: 'home', element:  <Home/>  },
      { path: 'shop', element:  <Shop/>  },
      { path: 'about', element:  <About/>  },
      { path: 'contact', element:  <Contact/>  },
      { path: 'checkout', element:  <CheckOut/>  },
      { path: 'singleProduct/:id', element:  <SingleProduct/>  },
                             
     
    ]
  }
])

function App() {

  

  return <>
 
<Provider store={myStore}>
      <RouterProvider router={myRouter} />
</Provider>

  </>
    
  ;
}

export default App;
