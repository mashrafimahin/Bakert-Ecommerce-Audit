// dependencies
import type { FC } from "react";
// components
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
// layouts
import AboutLayout from "../layouts/AboutLayout";

// main
const About: FC = () => {
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
