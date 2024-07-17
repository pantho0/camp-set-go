import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/ui/Container";

const CheckOut = () => {
  return (
    <Container>
      <div className="py-16 text-center">
        <h2 className="text-3xl font-medium text-center mb-4">
          Order Successful!
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Thank you for your purchase. Your order has been placed successfully.
        </p>

        <Link to="/products" className="btn btn-primary mt-8">
          Continue Shopping
        </Link>
      </div>
    </Container>
  );
};

export default CheckOut;
