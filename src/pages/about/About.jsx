import Container from "../../components/ui/Container";

const About = () => {
  return (
    <Container>
      <div className="py-16">
        <h2 className="text-3xl font-medium text-center">About Us</h2>
        <div className="mt-10 space-y-8">
          <div className="text-lg leading-relaxed">
            <p>
              Welcome to Camp-Set-Go, your one-stop destination for all your
              camping needs. Our mission is to provide outdoor enthusiasts with
              high-quality gear and equipment that make camping trips
              comfortable, enjoyable, and memorable. Whether you're a seasoned
              camper or a newbie looking to explore the great outdoors, we've
              got you covered.
            </p>
          </div>
          <div className="text-lg leading-relaxed">
            <h3 className="text-2xl font-semibold">Our Story</h3>
            <p>
              Camp-Set-Go was founded by a group of avid campers who saw the
              need for a reliable and comprehensive camping gear shop.
              Frustrated by the lack of quality products and the inconvenience
              of shopping at multiple stores, we decided to create a place where
              campers can find everything they need under one roof. From tents
              and sleeping bags to cookware and hiking gear, we strive to offer
              a wide selection of products that cater to all types of camping
              adventures.
            </p>
          </div>
          <div className="text-lg leading-relaxed">
            <h3 className="text-2xl font-semibold">Our Commitment</h3>
            <p>
              At Camp-Set-Go, we are committed to providing exceptional customer
              service and ensuring that our customers have a positive shopping
              experience. We carefully select and test our products to ensure
              they meet our high standards of quality and durability. Our team
              of camping experts is always available to offer advice and
              recommendations, helping you choose the best gear for your needs.
            </p>
          </div>
          <div className="text-lg leading-relaxed">
            <h3 className="text-2xl font-semibold">Join Our Community</h3>
            <p>
              We believe that camping is more than just an activity – it's a way
              to connect with nature, unwind from the hustle and bustle of daily
              life, and create lasting memories with loved ones. That's why
              we're passionate about building a community of outdoor enthusiasts
              who share our love for adventure. Follow us on social media,
              subscribe to our newsletter, and join our camping community to
              stay updated on the latest products, tips, and stories from fellow
              campers.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
