import Container from "../../components/ui/Container";

const ProductDetails = () => {
  return (
    <Container>
      <div className="flex flex-col gap-0 px-4 mt-2 md:flex-row md:gap-16 md:mt-16">
        <div className="w-full md:w-96 lg:w-96">Image slider will go here</div>
        <div className="space-y-2 text-center md:space-y-2 md:text-left">
          product details will go here
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
