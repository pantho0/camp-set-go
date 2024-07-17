import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

export default function CheckOutModal({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  function close() {
    setIsOpen(false);
  }

  const handleCheckOut = async (e) => {
    e.preventDefault();
    navigate("/checkout-success");
    close();
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
                Check Out
              </DialogTitle>
              <div className="px-10 mt-10">
                <form onSubmit={handleCheckOut}>
                  <div className="flex flex-col gap-2">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Customer Name</span>
                      </div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Type here"
                        className="input input-bordered w-full bg-white"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Address Line - 1</span>
                      </div>
                      <input
                        type="text"
                        name="line1"
                        placeholder="Type here"
                        className="input input-bordered w-full bg-white"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Address Line - 2</span>
                      </div>
                      <input
                        type="text"
                        name="line2"
                        placeholder="Type here"
                        className="input input-bordered w-full bg-white"
                      />
                    </label>
                  </div>

                  <div className="flex flex-col md:flex-row gap-2">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Notes (if any)</span>
                      </div>
                      <textarea
                        name="description"
                        className="textarea textarea-bordered"
                        placeholder="Bio"
                      ></textarea>
                    </label>
                  </div>
                  <div className="flex justify-center mt-6 mb-10">
                    <button className="btn btn-primary bg-primary border-none hover:bg-accent hover:text-black hover:btn-accent cursor-pointer">
                      <input type="submit" value="Check Out" />
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-primary py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
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
