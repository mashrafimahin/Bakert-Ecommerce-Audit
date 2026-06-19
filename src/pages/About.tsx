// dependencies
import { type FC, useEffect } from "react";
// components
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
// layouts
import AboutLayout from "../layouts/AboutLayout";

// main
const About: FC = () => {
  // auto scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <AboutLayout />
      <Footer />
    </>
  );
};

// exports
export default About;
