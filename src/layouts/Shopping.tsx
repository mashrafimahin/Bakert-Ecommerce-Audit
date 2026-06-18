// dependencies
import { type FC, useEffect } from "react";
// components
import ProductSearch from "../components/ui/productSearch";
import ProductCardView from "../components/ui/productCardView";
import RecipeCard from "../components/ui/recipeCard";
import Sidebar from "../components/ui/sidebar";
import useSlices from "../hooks/useSlices";
import { productThunk } from "../app/features/productController";

// main
const Shopping: FC = () => {
  // state
  const { data, dispatch } = useSlices("productController");

  // fetch products on mount
  useEffect(() => {
    dispatch(productThunk());
  }, [dispatch]);

  // filter  products
  const filteredProducts = data.allProducts.filter(
    (item) =>
      item.category !== "recipe" &&
      (!data.searchQuery ||
        item.name.toLowerCase().includes(data.searchQuery.toLowerCase())),
  );
  const RECIPES = data.allProducts
    .filter((item) => item.category === "recipe")
    .slice(0, 1);

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
          {filteredProducts.length > 0 ? (
            <>
              {filteredProducts.map((product) => (
                <ProductCardView key={product.id} product={product} />
              ))}

              {/* Recipes Section if selected */}
              {data.recipeVisible &&
                RECIPES.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </>
          ) : (
            <p className="text-gray-500 text-lg font-semibold mx-auto">
              No product found named "{data.searchQuery}"
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

// exports
export default Shopping;
