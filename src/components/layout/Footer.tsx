import { FacebookIcon } from "../icons";
import { LogoInstagram } from "../icons";
import { LogoX } from "../icons";
import logoFooter from "src/assets/images/headerlogo.png"
import Container from "../common/Container";

const Footer = () => {
  return (
    <footer className="bg-darkTeal text-white pt-10 pb-4">
      <Container className="flex flex-col xl:flex-row items-center justify-between gap-8">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logoFooter}
            alt=""
            className="w-24 h-24 rounded  shadow-lg"
          />
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#services" className="hover:underline">
            Services
          </a>
          <a href="#news" className="hover:underline">
            News
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon className="h-6 w-6 hover:text-teal-300" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoInstagram className="h-6 w-6 hover:text-teal-300" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoX className="h-6 w-6 hover:text-teal-300" />
          </a>
        </div>
      </Container>

      {/* Bottom line */}
      <div className="mt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Isabelle Airline. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
