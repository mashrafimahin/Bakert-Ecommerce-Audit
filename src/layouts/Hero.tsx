// dependencies
import type { FC } from "react";
// controller
import useSlices from "../hooks/useSlices";
import { setActiveCategory } from "../app/features/productController";
// icons
import { ArrowRight, Star } from "lucide-react";
// data (static)
import { HeroData } from "../static";
import Button from "../components/ui/button";

// main
const Hero: FC = () => {
  // state
  const { dispatch } = useSlices("productController");

  // handle click
  const handleClick = (): void => {
    dispatch(setActiveCategory("recipe"));
  };

  return (
    <section className="relative overflow-hidden py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* branding text */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#2C3333] leading-tight mb-6">
            {HeroData.headlineOne} <br />
            <span className="text-[#395B64]">{HeroData.headlineTwo}</span>
          </h1>
          <p className="text-lg md:text-xl text-[#2C3333]/80 mb-8 max-w-xl mx-auto lg:mx-0">
            {HeroData.paragraph}
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Button
              variant="link"
              link="shop"
              className="bg-[#395B64] hover:bg-[#2C3333] hover:text-white text-white px-8 py-4 rounded-full font-bold transition-colors flex items-center gap-2 shadow-lg shadow-[#395B64]/20"
            >
              {HeroData.buttonOne}
            </Button>
            <Button
              variant="link"
              link="shop"
              buttonHandler={handleClick}
              className="bg-white hover:bg-[#A5C9CA]/20 text-[#395B64] border-2 border-[#395B64] px-8 py-4 rounded-full font-bold transition-colors whitespace-nowrap flex items-center gap-2"
            >
              {HeroData.buttonTwo} <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Floating Image Content */}
        <div className="flex-1 relative w-full max-w-lg hidden md:block">
          <div className="relative z-10">
            <img
              src={HeroData.heroImage}
              alt="Delicious cake slice"
              className="w-full h-125 object-cover rounded-t-full rounded-b-[40px] shadow-2xl border-8 border-white"
            />

            {/* Floating badges */}
            <div className="absolute top-20 -left-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-[#E7F6F2]">
              <div className="bg-[#E7F6F2] p-2 rounded-full text-amber-400">
                <Star className="w-6 h-6 fill-amber-400" />
              </div>
              <div>
                <p className="font-bold text-[#2C3333]">4.9/5 Rating</p>
                <p className="text-sm text-[#395B64]">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
