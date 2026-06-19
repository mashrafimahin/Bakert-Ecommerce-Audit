// dependencies
import { type FC, useEffect } from "react";
// components
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
// layouts
import DocumentLayout from "../layouts/Document";
// data
import { privacyData } from "../static/index";

// main
const Privacy: FC = () => {
  // auto scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <DocumentLayout data={privacyData} />
      <Footer />
    </>
  );
};

// exports
export default Privacy;
