const Banner = () => {
  return (
    <section className="relative bg-[url(https://media.cntraveler.com/photos/5fbbdc25bead4eb22be793ae/master/w_2560%2Cc_limit/WinterCamping-2020-GettyImages-628134586.jpg)] bg-cover bg-center bg-no-repeat">
      <div
        className="absolute inset-0 bg-gray-900/80 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25
        lg:bg-gray-900/70 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
      ></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 lg:justify-center">
        <div className="max-w-xl text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Equip Your Adventure with
            <strong className="block font-extrabold text-secondary">
              {" "}
              the Best Camping Gear!{" "}
            </strong>
          </h1>

          <p className="mt-4 text-white sm:text-xl/relaxed text-center">
            Find top-rated tents, sleeping bags, backpacks, and more. Everything
            you need for a perfect outdoor experience.
          </p>

          <div className="mt-8 flex justify-center gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-primary/70 px-12 py-3 text-sm font-medium text-white shadow hover:bg-secondary hover:text-black focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
