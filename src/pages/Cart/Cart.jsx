import { useDispatch, useSelector } from "react-redux";

import Container from "../../components/ui/Container";
import { FaDollarSign } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import {
  addQuantity,
  minusQuantity,
  removeFromCart,
} from "../../redux/features/cartsSlice";
import { useState } from "react";
import CheckOutModal from "../../components/modals/CheckOutModal";
import Swal from "sweetalert2";

const Cart = () => {
  let [isOpen, setIsOpen] = useState(false);
  const cart = useSelector((state) => state.carts.carts);
  const dispatch = useDispatch();

  //modal controlling functions
  function open() {
    setIsOpen(true);
  }

  const totalPrice = cart.reduce(
    (acc, cart) => acc + cart.price * cart.quantity,
    0
  );

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure to delete the product from cart?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(id));
        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted from the cart.",
          icon: "success",
        });
      }
    });
  };

  const handleAddQuantity = (id) => {
    dispatch(addQuantity(id));
  };

  const handleMinusQuantity = (id) => {
    dispatch(minusQuantity(id));
  };

  return (
    <>
      <CheckOutModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex z-50 flex-col text-center p-4 lg:flex-row justify-center bg-secondary/60 rounded-lg text-white">
        <div className="lg:p-6">
          <p className="text-2xl text-black font-bold">Shopping Cart</p>
          <p className="text-sm text-gray-600">Showing your choosed product</p>
        </div>
      </div>
      <Container>
        <div className="z-50">
          {/* Cart Summary */}
          <div className="flex flex-col md:flex-row z-10">
            <div className="min-h-screen  md:w-[67%] bg-gary-300 m-5 shadow-2xl rounded-2xl lg:w-[66%]">
              {cart.length === 0 ? (
                <div>
                  <p className="flex w-full items-center justify-center h-[calc(100vh-30vh)] font-bold">
                    No Products Added Yet
                  </p>
                </div>
              ) : (
                <>
                  {cart.map((item, idx) => (
                    <div
                      className="flex flex-col md:flex-row items-center border-b-2 gap-2 p-8"
                      key={item?._id}
                    >
                      <div>
                        <div className="avatar gap-2">
                          <div>
                            <p>{idx + 1}.</p>
                          </div>
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={item?.image} />
                          </div>
                        </div>
                      </div>
                      <div className="text-center md:flex-grow md:text-left">
                        <p className="font-bold">{item?.name}</p>
                        <p>Price : {item?.price}</p>
                        <p>
                          Price with quantity : {item?.price * item?.quantity}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex border">
                          <button
                            disabled={item?.quantity < 2}
                            onClick={() => handleMinusQuantity(item._id)}
                            className="btn btn-xs rounded-none bg-secondary hover:bg-secondary/80 border-none btn-accent mr-4"
                          >
                            -
                          </button>
                          {item?.quantity}
                          <button
                            disabled={item?.quantity === item.stockQuantity}
                            onClick={() => handleAddQuantity(item._id)}
                            className="btn btn-xs bg-secondary border-none hover:bg-secondary/80 rounded-none btn-accent ml-4"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="btn btn-primary btn-xs "
                        >
                          <MdDeleteSweep size={18} color="white" />
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
            <div className="md:min-w-[33%] lg:m-5 h-1/2 rounded-2xl shadow-2xl">
              <div className="w-full md:w-full lg:w-full bg-white rounded-lg">
                <div className="text-center p-4 bg-primary text-white rounded-tr-2xl rounded-tl-2xl">
                  <p>Billing Summary</p>
                </div>
                <div className="flex justify-between px-4 pt-4 text-sm text-gray-500">
                  <p>Total Price</p>
                  <p className="flex items-center">
                    <FaDollarSign />
                    {totalPrice.toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between px-4 pt-4 text-sm text-gray-500">
                  <p>Total Price Discount</p>
                  <p className="flex items-center">
                    <FaDollarSign />
                    0.0
                  </p>
                </div>
                <div className="flex justify-between px-4 pt-4 text-sm text-gray-500">
                  <p>Vat & Tax</p>
                  <p className="flex items-center">
                    <FaDollarSign />
                    0.0
                  </p>
                </div>
                <hr className="mt-6" />
                <div className="flex justify-between px-4 pt-4 text-sm text-black font-medium">
                  <p>Sub Total Price</p>
                  <p>{totalPrice.toFixed(2)}</p>
                </div>

                <hr className="mt-6" />

                <div className="p-3 mt-4">
                  <button
                    onClick={open}
                    disabled={cart.length === 0}
                    className="btn btn-primary bg-primary border-none hover:bg-primary/50 hover:text-black btn-md rounded-md w-full"
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>{" "}
    </>
  );
};

export default Cart;
