import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/layout/header.css";
import Container from "../common/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";


const QuickNavigationBar = () => {
    const [activeLink, setActiveLink] = useState<string>("tour-packages"); // Default to "tour-packages"

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
    };

    return (
        <div className="w-full bg-darkTeal py-1 sm:py-2 xl:py-4">
            <Container className="py-5">
                <nav className="w-fit max-w-full mx-auto flex xl:justify-center items-center gap-2">
                    <Carousel opts={{
                        align: "start",
                        skipSnaps: true
                        }} className="slider-visible-overflow w-full mx-auto">
                        <CarouselContent className="w-full mx-auto ml-0 justify-start xl:justify-evenly gap-2 sm:gap-3 xl:gap-5">
                            <CarouselItem className="basis-auto ps-0">
                                <Link
                                to="/tour-packages"
                                className={`nav-link ${
                                    activeLink === "tour-packages" ? "active" : ""
                                }`}
                                onClick={() => handleLinkClick("tour-packages")}
                                >
                                    Tour Packages
                                </Link>
                            </CarouselItem>
                            <CarouselItem className="basis-auto ps-0">
                                <Link
                                to="/hotels"
                                className={`nav-link ${
                                    activeLink === "hotels" ? "active" : ""
                                }`}
                                onClick={() => handleLinkClick("hotels")}
                                >
                                    Hotels
                                </Link>
                            </CarouselItem>
                            <CarouselItem className="basis-auto ps-0">
                                <Link
                                to="/flights"
                                className={`nav-link ${
                                    activeLink === "flights" ? "active" : ""
                                }`}
                                onClick={() => handleLinkClick("flights")}
                                >
                                    Flights
                                </Link>
                            </CarouselItem>
                            <CarouselItem className="basis-auto ps-0">
                                <Link
                                to="/cruises"
                                className={`nav-link ${
                                    activeLink === "cruises" ? "active" : ""
                                }`}
                                onClick={() => handleLinkClick("cruises")}
                                >
                                    Cruises
                                </Link>
                            </CarouselItem>
                            <CarouselItem className="basis-auto ps-0">
                                <Link
                                to="/attractions"
                                className={`nav-link ${
                                    activeLink === "attractions" ? "active" : ""
                                }`}
                                onClick={() => handleLinkClick("attractions")}
                                >
                                    Attractions
                                </Link>
                            </CarouselItem>
                            <CarouselItem className="basis-auto ps-0">
                                <Link
                                to="/restaurants"
                                className={`nav-link ${
                                    activeLink === "restaurants" ? "active" : ""
                                }`}
                                onClick={() => handleLinkClick("restaurants")}
                                >
                                    Restaurants
                                </Link>
                            </CarouselItem>
                            <CarouselItem className="basis-auto ps-0">
                                <Link
                                to="/taxi"
                                className={`nav-link ${
                                    activeLink === "taxi" ? "active" : ""
                                }`}
                                onClick={() => handleLinkClick("taxi")}
                                >
                                    Taxi/Ride Hailing
                                </Link>
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </nav>
            </Container>
      </div>
    )
}

export default QuickNavigationBar
