import { useQuery } from "@tanstack/react-query";
import useAxios from "../../components/hooks/useAxios";
import { LuFileEdit } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import Container from "../../components/ui/Container";
import { useState } from "react";
import AddProductModal from "../../components/modals/AddProductModal";
import toast from "react-hot-toast";
import ProductUpdateModal from "../../components/modals/ProductUpdateModal";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ProductManagement = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [product, setProduct] = useState({});
  const axiosPublic = useAxios();

  //modal controlling functions
  function open() {
    setIsOpen(true);
  }

  function openUpdate() {
    setIsOpenUpdate(true);
  }

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axiosPublic("/products");
      return data;
    },
  });
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <p className="text-4xl font-bold">Loading....</p>
      </div>
    );
  }

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you want to delete the product?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosPublic.delete(`/products/${id}`);
        if (data.success) {
          toast.success("Product Deleted");
          refetch();
        }
        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Camp-Set-Go || Products Management</title>
      </Helmet>
      <AddProductModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        refetch={refetch}
      />
      <ProductUpdateModal
        isOpenUpdate={isOpenUpdate}
        setIsOpenUpdate={setIsOpenUpdate}
        refetch={refetch}
        product={product}
      />
      <div className="flex z-50 flex-col text-center p-4 lg:flex-row justify-center bg-secondary/60 rounded-lg text-white">
        <div className="lg:p-6">
          <p className="text-2xl text-black font-bold">Product Management</p>
          <p className="text-sm text-gray-600">Inventory</p>
        </div>
      </div>

      <Container>
        <div className="mt-4 flex justify-end">
          <button
            onClick={open}
            className="btn btn-ghost border-2 border-dashed border-secondary/50 hover:bg-secondary"
          >
            Add New Product
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-center">
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {products &&
                products?.data?.map((product) => (
                  <tr key={product?._id}>
                    <td>
                      <div className="flex items-center justify-start gap-4">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={product?.images[0]} />
                          </div>
                        </div>
                        <p>{product?.name}</p>
                      </div>
                    </td>
                    <td>
                      {product?.category}
                      <br />
                    </td>
                    <td>{product?.price}</td>

                    <td>
                      <div className="flex gap-3 justify-center">
                        <button
                          className="btn btn-xs tooltip"
                          data-tip="Update"
                        >
                          <LuFileEdit
                            onClick={() => [openUpdate(), setProduct(product)]}
                            size={20}
                            color="green"
                          />
                        </button>

                        <div className="tooltip" data-tip="Delete">
                          <MdDelete
                            onClick={() => handleDelete(product?._id)}
                            size={20}
                            className="cursor-pointer"
                            color="red"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default ProductManagement;
