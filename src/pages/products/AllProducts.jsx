import { Link, useLocation } from "react-router-dom";
import Container from "../../components/ui/Container";
import useAxios from "../../components/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const AllProducts = () => {
  const axiosPublic = useAxios();
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("");

  const {
    data: products = [],
    isLoading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["products", search, category, minPrice, maxPrice, sort],
    queryFn: async () => {
      const { data } = await axiosPublic("/products", {
        params: { search, category, minPrice, maxPrice, sort },
      });
      return data;
    },
  });

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  const handleClearFilters = () => {
    setSearch("");
    setCategory("");
    setMinPrice("");
    setMaxPrice("");
    setSort("");
    refetch();
  };

  return (
    <Container>
      <Helmet>
        <title>Camp-Set-Go || Products</title>
      </Helmet>
      <div className="py-16">
        <h2 className="text-3xl font-medium text-center">All Products</h2>

        <div className="flex flex-col md:flex-row justify-between gap-4 py-4">
          <input
            type="text"
            placeholder="Search by name or description"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-full"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full"
          >
            <option value="">All Categories</option>
            <option value="Tents">Tents</option>
            <option value="Sleeping Bags">Sleeping Bags</option>
            <option value="Backpacks">Backpacks</option>
            <option value="Cooking Gear">Cooking Gear</option>
            <option value="Lighting">Lighting</option>
            <option value="Accessories">Accessories</option>
          </select>
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="input input-bordered w-full"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="input input-bordered w-full"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="select select-bordered w-full"
          >
            <option value="">Sort by</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
          <button
            onClick={handleClearFilters}
            className="btn btn-outline w-[80px]"
          >
            Clear Filters
          </button>
        </div>

        {isLoading || isFetching ? (
          <div className=" flex justify-center items-center">
            <p>Loading...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4 py-10">
            {products?.data?.map((product) => (
              <Link
                key={product._id}
                to={`${location?.pathname}/${product._id}`}
                className="group relative block overflow-hidden"
              >
                <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <span className="sr-only">Wishlist</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>

                <img
                  src={product?.images[0]}
                  alt={`${product?.name} image`}
                  className="h-96 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />

                <div className="relative border border-gray-100 bg-white p-4">
                  <h3 className="mt-4 text-lg font-medium text-gray-900">
                    {product?.name}
                  </h3>

                  <p className="mt-1.5 text-sm text-gray-700">
                    ${product?.price}
                  </p>

                  <form className="mt-4">
                    <button className="block w-full rounded bg-primary/70 text-base-100 p-4 text-sm font-medium transition hover:scale-105">
                      Details
                    </button>
                  </form>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default AllProducts;
