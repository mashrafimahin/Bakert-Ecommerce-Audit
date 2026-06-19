// dependencies
import type { FC } from "react";
// controller
import useSlices from "../hooks/useSlices";
// components
import Typography from "../components/typography";
import ProductCardView from "../components/ui/productCardView";

// main
const FavoriteLayout: FC = () => {
  // state
  const { data } = useSlices("productController");
  const favItems = data.favoriteProducts;

  return (
    <div className="flex-1">
      <Typography variant="subHead" className="mb-4 ml-2">
        Your Favorites
      </Typography>

      {/* Order Item */}
      {favItems.length > 0 ? (
        <div className="space-y-6 grid grid-cols-3 gap-6">
          {favItems.map((elm) => (
            <ProductCardView key={elm.id} product={elm} />
          ))}
        </div>
      ) : (
        <p className="text-md ml-2 font-semibold">No favorite items found.</p>
      )}
    </div>
  );
};

// exports
export default FavoriteLayout;
