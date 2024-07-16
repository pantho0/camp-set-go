import { Link, useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../components/ui/Container";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../components/hooks/useAxios";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { FaDollarSign } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cartsSlice";
import { useState } from "react";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const axiosPublic = useAxios();
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: product = {} } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/products/${id}`);
      return data;
    },
  });

  const handleQuantity = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
  };

  const handleCart = () => {
    if (quantity > product.data?.stockQuantity) {
      return toast.error("You can not select larger than quantity");
    }
    dispatch(addToCart({ ...product.data, quantity }));
    toast.success("Product added to cart");
    navigate("/cart");
  };

  return (
    <Container>
      <div className="flex flex-col gap-0 px-4 mt-2 md:flex-row md:gap-16 md:py-16">
        <div className="w-full md:w-96 lg:w-96">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {product?.data?.images?.map((image) => (
              <SwiperSlide key={image}>
                <div className="relative h-[450px] sm:h-[450px]">
                  <img
                    alt="ecommerce"
                    className="object-cover md:object-contain object-center  md:w-full md:h-full block"
                    src={image}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 text-center md:space-y-2 md:text-left">
          <div className="space-y-2 text-center md:space-y-2 md:text-left">
            <h2 className="text-xl md:text-3xl font-bold">
              {product?.data?.name}
            </h2>
            <p className="text-2xl font-bold text-green-800 flex justify-center items-center md:justify-start">
              <FaDollarSign size={18} />
              {product?.data?.price}{" "}
            </p>
            <h2 className="text-xl md:text-base font-bold">
              In-Stock : {product?.data?.stockQuantity}
            </h2>
            <p className="text-slate-500">{product?.data?.description}</p>
            <div className="divider"></div>

            <div className="flex justify-center gap-2 md:justify-start md:gap-4">
              <div className="flex flex-col px-16 md:flex-row gap-2 md:px-0">
                <div>
                  <label className="input input-bordered flex items-center gap-2">
                    Enter Quantity :
                    <input
                      onBlur={handleQuantity}
                      type="text"
                      className="grow"
                      placeholder="Daisy"
                    />
                  </label>
                </div>
                <button onClick={handleCart} className="btn btn-outline">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
