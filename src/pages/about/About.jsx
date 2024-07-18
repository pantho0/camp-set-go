import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const About = () => {
  const teamMembers = [
    {
      name: "John Doe",
      position: "Founder & CEO",
      bio: "John is an avid camper with over 20 years of experience in the outdoor industry.",
      photo:
        "https://www.qtrainers.com/upload/profile/160/2020/02/profile_35405e4683b309238.jpg",
    },
    {
      name: "Jane Smith",
      position: "Marketing Director",
      bio: "Jane loves promoting the great outdoors and connecting with the camping community.",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQey3S6VQ4qIppedXehx8CQYDshaMBwU1UwpQ&s",
    },
    {
      name: "Mike Johnson",
      position: "Product Manager",
      bio: "Mike ensures that our products meet the highest standards of quality and functionality.",
      photo:
        "https://blog.kingland.com/hubfs/leadership-2022/Leadership_Matt-Good.jpg",
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p>
          At Camp-Set-Go, our mission is to provide high-quality camping gear
          that enhances your outdoor experiences. We value sustainability,
          innovation, and the joy of adventure. Our goal is to equip every
          camper with the best tools and knowledge to explore nature confidently
          and responsibly.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Meet Our Team</h2>
        <div className="flex flex-wrap -mx-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="w-full md:w-1/3 p-4">
              <div className="border rounded-lg p-4 text-center">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
                <p className="mt-2">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-0">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@camp-set-go.com</p>
            <p>Address: 123 Adventure Road, Wilderness, USA</p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Follow Us</h2>
            <div className="flex space-x-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook size={30} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter size={30} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram size={30} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="mb-8 flex-1">
          <h2 className="text-2xl font-semibold mb-6">Our Location</h2>
          <div className="h-64 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096196!2d144.95373531584435!3d-37.81621874202156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43b24f09b7%3A0xf3c7a3c5a5b8a00!2sWilderness!5e0!3m2!1sen!2sus!4v1595395399126!5m2!1sen!2sus"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Camp-Set-Go Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
