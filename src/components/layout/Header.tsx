import TopHeader from "./TopHeader";

const Header = ({ scrolled }: { scrolled: boolean }) => {
  return (
    <>
      <TopHeader scrolled={scrolled} />
    </>
  );
};

export default Header;
