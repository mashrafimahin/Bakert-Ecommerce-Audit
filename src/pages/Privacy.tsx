// dependencies
import type { FC } from "react";
// components
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
// layouts
import DocumentLayout from "../layouts/Document";
// data
import { privacyData } from "../static/index";

// main
const Privacy: FC = () => {
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
