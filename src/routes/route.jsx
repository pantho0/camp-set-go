import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AllProducts from "../pages/products/AllProducts";
import ProductDetails from "../pages/products/ProductDetails";
import Cart from "../pages/Cart/Cart";
import ProductManagement from "../pages/products/ProductManagement";
import CheckOut from "../pages/Chekout/CheckOut";
import About from "../pages/about/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <AllProducts />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/api/v1/products/${params?.id}`),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "management",
        element: <ProductManagement />,
      },

      {
        path: "checkout-success",
        element: <CheckOut />,
      },
      {
        path: "aboutus",
        element: <About />,
      },
    ],
  },
]);
