import { PropsWithChildren, useRef, useEffect, useState } from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { Outlet } from "react-router-dom";
import { ScrollArea } from "src/components/ui/scroll-area";

const Layout = ({ children }: PropsWithChildren) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      setScrolled(container.scrollTop > 0);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollArea className="relative w-full max-w-full h-screen [&>div>div]:!block">
      <div className="h-screen overflow-auto" ref={scrollRef}>
        <Header scrolled={scrolled} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ScrollArea>
  );
};

export default Layout;
