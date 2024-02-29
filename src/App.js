import { createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from './pages/Products';
import React from "react";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailsPage from "./pages/ProductDetail";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage/>}></Route>
//     <Route path="/products" element={<ProductsPage/>}></Route>
//   </Route>
// )

const router = createBrowserRouter([
  {
    path:'/root',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children:[
      { 
        index: true, 
        element: <HomePage/> 
      },
      {
        path:'products',
        element: <ProductsPage/>
      },
      {
        path:'products/:productId',
        element : <ProductDetailsPage/>
      }
    ]
  },
  
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
