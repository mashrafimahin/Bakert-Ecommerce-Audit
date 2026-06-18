// dependencies
import { useEffect, type FC } from "react";
// components
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
// layouts
import CheckoutLayout from "../layouts/CheckoutLayout";

// main
const Checkout: FC = () => {
  // auto scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <CheckoutLayout />
      <Footer />
    </>
  );
};

// exports
export default Checkout;
