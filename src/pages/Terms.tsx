// dependencies
import { type FC, useEffect } from "react";
// components
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
// layouts
import DocumentLayout from "../layouts/Document";
// data
import { termsData } from "../static/index";

// main
const Terms: FC = () => {
  // auto scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <DocumentLayout data={termsData} />
      <Footer />
    </>
  );
};

// exports
export default Terms;
