import AboutSection from "./components/AboutSection";
import HeroCarousel from "./components/HeroCarousel"; // adjust path as needed
import ContactSection from "./components/ContactSection";
const Home = () => {
  return (
    <>
      {/* Quick caresuel Bar */}
      <HeroCarousel/>

      {/* About Section */}
      <AboutSection/>

      {/* Services Section */}
      <div
        id="services"
        className="min-h-screen flex items-center justify-center bg-lightGrey"
      >
        <div className="max-w-4xl text-center px-4">
          <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
          <p className="text-gray-600 mb-2">- Web Development</p>
          <p className="text-gray-600 mb-2">- UX/UI Design</p>
          <p className="text-gray-600 mb-2">- Digital Marketing</p>
        </div>
      </div>

      {/* News Section */}
      <div
        id="news"
        className="min-h-screen flex items-center justify-center bg-darkTeal"
      >
        <div className="max-w-3xl text-center px-4">
          <h2 className="text-3xl font-semibold mb-4 text-white">Latest News</h2>
          <p className="text-gray-600">
            Stay tuned for updates and insights from our team and the industry.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection/>
    </>
  );
};

export default Home;
