// dependencies
import { type FC, useEffect } from "react";
// components
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
// layouts
import ProductDetailsLayout from "../layouts/productLayout";

// main
const ProductDetails: FC = () => {
  // auto scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <ProductDetailsLayout />
      <Footer />
    </>
  );
};

// exports
export default ProductDetails;
