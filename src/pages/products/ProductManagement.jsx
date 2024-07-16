import { useQuery } from "@tanstack/react-query";
import useAxios from "../../components/hooks/useAxios";
import { LuFileEdit } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import Container from "../../components/ui/Container";

const ProductManagement = () => {
  const axiosPublic = useAxios();
  const { data: products = [], isLoading } = useQuery({
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
  return (
    <div>
      <div className="flex z-50 flex-col text-center p-4 lg:flex-row justify-center bg-secondary/60 rounded-lg text-white">
        <div className="lg:p-6">
          <p className="text-2xl text-black font-bold">Product Management</p>
          <p className="text-sm text-gray-600">Inventory</p>
        </div>
      </div>
      <Container>
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
                      <div className="flex items-center justify-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={product?.images[0]} />
                          </div>
                        </div>
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
                          <LuFileEdit size={20} color="green" />
                        </button>

                        <div className="tooltip" data-tip="Delete">
                          <MdDelete
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
