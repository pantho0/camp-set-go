import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxios from "../../components/hooks/useAxios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cartsSlice";

const Cart = () => {
  return <div>This is card page</div>;
};

export default Cart;
