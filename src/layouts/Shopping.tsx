// dependencies
import { type FC } from "react";
// interface/@types
// utilities
// icons
// components
import ProductSearch from "../components/ui/productSearch";
import ProductCardView from "../components/ui/productCardView";
import RecipeCard from "../components/ui/recipeCard";
import Sidebar from "../components/ui/sidebar";
// layouts
// data
import { PRODUCTS, RECIPES } from "../data";

// main
const Shopping: FC = () => {
  // state

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex flex-col md:flex-row gap-10 bg-[#E7F6F2] min-h-screen">
      {/* Sidebar Filters */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header Options */}
        <ProductSearch />

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCardView key={product.id} product={product} />
          ))}

          {/* Recipes Section if selected */}
          {RECIPES.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

// exports
export default Shopping;
