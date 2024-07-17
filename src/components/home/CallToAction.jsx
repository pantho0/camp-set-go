import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="px-0  mx-auto max-w-7xl my-10 sm:px-4">
      <div className="grid items-center grid-cols-1 gap-10 px-4  overflow-hidden text-primary bg-primary/10 border-pink-100 rounded-none card  sm:rounded-lg md:px-10 md:grid-cols-5 lg:gap-0">
        <div className="col-span-1 md:col-span-3">
          <h2 className="mb-3 font-serif text-2xl font-normal leading-tight lg:text-3xl">
            Ready to Hit the Open Road?
          </h2>
          <p className="mb-6 text-sm font-semibold lg:text-base">
            Discover a world of adventure with our top-quality campers. From
            rugged off-road vehicles to cozy family-friendly models, we have the
            perfect camper for your next outdoor escape. Enjoy unmatched
            comfort, durability, and style.
          </p>
          <Link
            to="/products"
            className="w-full shadow btn btn-white bg-primary hover:bg-primary/70 text-slate-100 btn-lg sm:w-auto"
          >
            Shop Now
          </Link>
        </div>
        <div className="col-span-1 md:col-span-2">
          <img
            src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D"
            className="w-full ml-0 select-none lg:ml-48"
            alt="Mac App"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
