import { useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

function App() {
  const cart = useSelector((state) => state.carts.carts);
  useEffect(() => {
    if (cart.length !== 0) {
      const message = (event) => {
        event.preventDefault();
        event.returnValue = "Cart data will be reset";
      };
      window.addEventListener("beforeunload", message);
      return () => window.removeEventListener("beforeunload", message);
    }
  }, [cart.length]);

  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
