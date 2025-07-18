import React from "react";
import bgImage from "src/assets/images/plan1.jpeg"; // Adjust path as needed
import Container from "src/components/common/Container";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center md:justify-normal bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Container>
        <div className="bg-opacity-80 p-8 rounded-xl shadow-xl text-center w-full md:w-2/3">
          <h2 className="text-3xl font-semibold mb-8 text-lightGrey">
            Contact Us
          </h2>
          <div className="mb-5">
            <div className="text-lg font-semibold text-lightGrey">
              Do you need consulting for your business?
            </div>
            <div className="text-lg text-lightGrey">
              We can provide you with resources that will help you achieve your
              goals!
            </div>
          </div>

          <p className=" mb-2 text-lightGrey">Email: info@example.com</p>
          <p className="text-lightGrey mb-2">WebSite: www.info.com</p>
          {/* <p className="text-lightGrey">Phone: +123 456 7890</p> */}
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
