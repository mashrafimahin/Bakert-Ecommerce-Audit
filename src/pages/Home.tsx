// dependencies
import { useEffect } from "react";
// components
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
// layouts
import Hero from "../layouts/Hero";
import Featured from "../layouts/Featured";
import Services from "../layouts/Services";
import CTA from "../components/ui/CTA";

const Home = () => {
  // auto scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Services />
      <CTA
        title={"Ready to satisfy your sweet tooth?"}
        desc={
          "Join our community to get 15% off your first order and exclusive access to new baking recipes."
        }
        buttonOne={"signup"}
        buttonTwo={"contact"}
      />
      <Footer />
    </>
  );
};

export default Home;
