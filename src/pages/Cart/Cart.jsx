import { useDispatch, useSelector } from "react-redux";

import Container from "../../components/ui/Container";
import { FaDollarSign } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { removeFromCart } from "../../redux/features/cartsSlice";

const Cart = () => {
  const cart = useSelector((state) => state.carts.carts);
  const dispatch = useDispatch();
  console.log(cart);

  const totalPrice = cart.reduce((acc, cart) => acc + cart.price, 0);

  const handleDelete = (id) => {
    console.log(id);
    dispatch(removeFromCart(id));
  };

  return (
    <Container>
      <div className="z-50">
        <div className="flex z-50 flex-col text-center p-4 lg:flex-row justify-center bg-secondary/60 rounded-lg text-white">
          <div className="lg:p-6">
            <p className="text-2xl text-black font-bold">Shopping Cart</p>
            <p className="text-sm text-gray-600">
              Showing your choosed product
            </p>
          </div>
        </div>
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
                      <p>{item?.priceWithQuantity}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex border">
                        <button className="btn btn-xs rounded-none btn-accent mr-4">
                          -
                        </button>
                        {item?.quantity}
                        <button className="btn btn-xs rounded-none btn-accent ml-4">
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-primary btn-xs"
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
              <div className="text-center p-4 bg-black text-white rounded-tr-2xl rounded-tl-2xl">
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
              {/* <div className="flex justify-between px-4 pt-4 text-sm text-black font-medium">
                <p>
                  Grand Total Price <br />{" "}
                  <span>
                    <small className="text-red-600 font-bold">
                      With delivery charge included (inside dhaka 80tk,
                      <br /> outside 120tk),it will calculated when you select
                      your delivery address
                    </small>
                  </span>
                </p>
                <p>{priceWithDeliveryCharge?.toFixed(2)}</p>
              </div> */}
              <hr className="mt-6" />

              <div className="p-3 mt-4">
                <button className="btn btn-primary bg-green-900 border-none hover:bg-accent hover:text-black btn-md rounded-md w-full">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
