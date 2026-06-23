// dependencies
import { useState, type FC } from "react";
// controller
import useSlices from "../hooks/useSlices";
import { removeFavoriteThunk } from "../app/features/dashboardController";
// components
import Typography from "../components/typography";
import ProductCardView from "../components/ui/productCardView";
// icons
import { Edit2, X } from "lucide-react";

// main
const FavoriteLayout: FC = () => {
  // state
  const { data, dispatch } = useSlices("dashboardController");
  const favItems = data.favoriteHistory;
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  // toggle edit mode
  const toggleEditMode = (): void => {
    setIsEditMode((prev) => !prev);
  };

  // handle remove favorite
  const handleRemoveFav = (productId: string): void => {
    dispatch(removeFavoriteThunk(productId));
  };

  return (
    <div className="flex-1">
      <div className="flex items-center justify-between mb-4 ml-2">
        <Typography variant="subHead" className="mb-0">
          Your Favorites
        </Typography>
        <button
          onClick={toggleEditMode}
          className="flex items-center gap-1 px-3 py-1.5 text-sm font-semibold text-[#395B64] hover:text-[#2C3333] bg-[#E7F6F2] hover:bg-[#A5C9CA]/30 rounded-lg transition-colors"
        >
          {isEditMode ? (
            <>
              <X size={16} /> Done
            </>
          ) : (
            <>
              <Edit2 size={16} /> Edit
            </>
          )}
        </button>
      </div>

      {/* Order Item */}
      {favItems.length > 0 ? (
        <div className="space-y-6 grid grid-cols-3 gap-6">
          {favItems.map((elm) => (
            <ProductCardView
              key={elm.id}
              product={elm}
              isEditMode={isEditMode}
              onRemove={() => handleRemoveFav(elm.id)}
            />
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
