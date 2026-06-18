// dependencies
import { type FC, useEffect } from "react";
// components
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
// layouts
import Shopping from "../layouts/Shopping";

// main
const Shop: FC = () => {
  // auto scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Shopping />
      <Footer />
    </>
  );
};

// exports
export default Shop;
