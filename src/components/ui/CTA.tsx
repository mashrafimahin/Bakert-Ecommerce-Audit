// dependencies
import type { FC } from "react";
import { Link } from "react-router-dom";
// types
type InputValues = {
  title: string;
  desc: string;
  buttonOne?: string;
  buttonTwo?: string;
};
// typography
import Typography from "../typography";

// main
const CTA: FC<InputValues> = ({ title, desc, buttonOne, buttonTwo }) => {
  return (
    <section className="py-24 bg-[#395B64] relative overflow-hidden">
      {/* decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#A5C9CA] rounded-full blur-[100px] opacity-30"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-[#2C3333] rounded-full blur-[100px] opacity-40"></div>

      {/* content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <Typography variant="head" className="text-white">
          {title}
        </Typography>
        <Typography className="text-gray-300 mb-6">{desc}</Typography>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {buttonOne === "signup" && (
            <Link
              to="/signup"
              className="bg-[#E7F6F2] text-[#2C3333] px-8 py-4 rounded-full font-bold hover:bg-white transition-colors shadow-lg"
            >
              Sign Up Now
            </Link>
          )}
          {buttonTwo === "contact" && (
            <Link
              to="/contact"
              className="bg-transparent text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors border-2 border-[#A5C9CA]"
            >
              Contact Us
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTA;
