import headerLogo from "src/assets/images/headerlogo.png";
import Container from "../common/Container";
import { FacebookIcon } from "../icons";
import { LogoInstagram } from "../icons";
import { LogoX } from "../icons";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetClose,
} from "src/components/ui/sheet";

const TopHeader = ({ scrolled }: { scrolled: boolean }) => {
  const iconColorClass = scrolled ? "text-darkTeal" : "text-white";

  const navItems = ["home", "about", "services", "news", "contact"];

  return (
    <div
      className={`fixed top-0 z-[40] w-full transition-colors duration-300 ease-in-out ${
        scrolled ? "bg-lightGrey shadow-sm" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between w-full py-2 text-darkBlue">
          {/* Logo */}
          <a href="#home">
            <img
              src={headerLogo}
              className="w-20 h-20 sm:w-32 sm:h-32 object-contain"
              alt="Logo"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex gap-10 xl:gap-12 text-sm xl:text-base">
            {navItems.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`${iconColorClass} hover:text-grey transition capitalize`}
              >
                {section}
              </a>
            ))}
          </nav>

          {/* Desktop Social Icons */}
          <div className="hidden sm:flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className={`${iconColorClass} hover:text-grey transition`}
            >
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className={`${iconColorClass} hover:text-grey transition`}
            >
              <LogoInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className={`${iconColorClass} hover:text-grey transition`}
            >
              <LogoX className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button aria-label="Open Menu">
                  <Menu className="w-6 h-6 text-darkBlue" />
                </button>
              </SheetTrigger>

              <SheetContent side="right" className="w-64">
                <SheetHeader>
                  <img
                    src={headerLogo}
                    className="w-20 h-20 mx-auto mb-4"
                    alt="Logo"
                  />
                </SheetHeader>

                {/* Mobile Navigation */}
                <nav className="flex flex-col gap-4 text-darkBlue">
                  {navItems.map((section) => (
                    <SheetClose key={section} asChild>
                      <a href={`#${section}`} className="capitalize">
                        {section}
                      </a>
                    </SheetClose>
                  ))}
                </nav>

                {/* Mobile Social Icons */}
                <div className="flex gap-4 pt-6 border-t mt-6">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="text-darkTeal hover:text-grey transition"
                  >
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="text-darkTeal hover:text-grey transition"
                  >
                    <LogoInstagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter"
                    className="text-darkTeal hover:text-grey transition"
                  >
                    <LogoX className="w-5 h-5" />
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
