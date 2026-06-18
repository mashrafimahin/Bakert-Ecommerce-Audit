// dependencies
import { type FC } from "react";
import { Link } from "react-router-dom";
// typography
import Typography from "../components/typography";
// icons
import { ArrowRight } from "lucide-react";
// components
import ProductCard from "../components/ui/productCard";
// data
import { FeaturedData } from "../static";
import useSlices from "../hooks/useSlices";

// main
const Featured: FC = () => {
  // state
  const { data } = useSlices("productController");

  const PRODUCTS = data.allProducts.filter(
    (item) => item.category !== "recipe",
  );

  return (
    <section className="py-24 bg-white rounded-t-[3rem] shadow-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="text-center mb-16">
          <Typography variant="head">{FeaturedData.headline}</Typography>
          <Typography>{FeaturedData.subLine}</Typography>
        </div>

        {/* product cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.slice(0, 4).map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        {/* action button */}
        <div className="mt-16 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-[#395B64] font-bold text-lg hover:text-[#2C3333] transition-colors border-b-2 border-[#A5C9CA] pb-1"
          >
            {FeaturedData.button} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
