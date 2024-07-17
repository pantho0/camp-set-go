import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { uploadImage } from "../api/api";
import toast from "react-hot-toast";
import useAxios from "../hooks/useAxios";
import useCategories from "../hooks/useCategories";

export default function AddProductModal({ isOpen, setIsOpen, refetch }) {
  const [allImages, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const categories = useCategories();
  const axiosPublic = useAxios();

  function close() {
    setIsOpen(false);
  }

  const handleSelectImg = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  //image upload api call
  const uploadProductImage = async (image) => {
    try {
      const url = await uploadImage(image);
      if (url) {
        toast.success("Product Image Uploaded");
      }
      setImages([...allImages, url]);
      setSelectedImage("");
    } catch (err) {
      toast.error(
        "Image upload failed or you are trying to upload in the same field"
      );
    }
  };

  const handleImagesUpload = (e) => {
    e.preventDefault();
    const image = selectedImage;
    uploadProductImage(image);
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const stockQuantity = form.quantity.value;
    const description = form.description.value;
    const images = allImages;

    const product = {
      name,
      category,
      price,
      stockQuantity,
      description,
      images,
      ratings: 5.0,
    };
    console.log(product);
    const { data } = await axiosPublic.post("/products/add-product", product);
    console.log(data);
    if (data.success) {
      toast.success("Product Added Successfully");
      setImages([]);
      setSelectedImage("");
      refetch();
      close();
    }
  };

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-slate-200 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base font-bold text-center text-black"
              >
                Add New Product
              </DialogTitle>
              <div className="px-10 mt-10">
                <form onSubmit={handleAddProduct}>
                  <div className="flex flex-col gap-2">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Product Name</span>
                      </div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Type here"
                        className="input input-bordered w-full bg-white"
                      />
                    </label>
                    <label className="form-control w-full ">
                      <div className="label">
                        <span className="label-text">Category</span>
                      </div>
                      <select
                        name="category"
                        className="select select-bordered uppercase bg-white"
                      >
                        <option selected disabled>
                          Plese Select Category
                        </option>
                        {categories?.categories?.map((cat) => (
                          <option className="uppercase" key={cat.name}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Price</span>
                      </div>
                      <input
                        type="number"
                        name="price"
                        placeholder="Type here"
                        className="input input-bordered w-full bg-white"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Stock Quantity</span>
                      </div>
                      <input
                        type="number"
                        name="quantity"
                        placeholder="Type here"
                        className="input input-bordered w-full bg-white"
                      />
                    </label>
                  </div>

                  <div className="border-2 border-dashed border-secondary p-4 my-2">
                    {allImages.length === 0 ? (
                      <p className="text-black">No image selected yet</p>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {allImages.map((image, idx) => (
                          <div key={idx} className="flex gap-2">
                            <img
                              className="w-[50px] h-[50px] object-cover"
                              src={image}
                              alt=""
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-row gap-2 items-center">
                    <label className="form-control w-[90%]">
                      <div className="label">
                        <span className="label-text">Pictures</span>
                      </div>
                      <input
                        name="picture"
                        onChange={handleSelectImg}
                        type="file"
                        className="file-input file-input-bordered file-input-md w-full"
                        multiple
                      />
                    </label>

                    <div>
                      <div className="label">
                        <span className="label-text">max:200kb</span>
                      </div>
                      <button
                        onClick={handleImagesUpload}
                        className="btn btn-primary bg-green-900 border-none hover:bg-accent hover:text-black"
                      >
                        Add Image
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-2">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Product Description</span>
                      </div>
                      <textarea
                        name="description"
                        className="textarea textarea-bordered"
                        placeholder="Bio"
                      ></textarea>
                    </label>
                  </div>
                  <div className="flex justify-center mt-6 mb-10">
                    <button className="btn btn-primary bg-green-900 border-none hover:bg-accent hover:text-black hover:btn-accent cursor-pointer">
                      <input type="submit" value="Update Product" />
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Close
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
