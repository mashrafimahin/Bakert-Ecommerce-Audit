// dependencies
import { useState, type FC } from "react";
// controller
import useSlices from "../../../hooks/useSlices";
import { handleNotification } from "../../../app/features/globalController";
import { addFavorite } from "../../../handlers/toggleHandler";
// interface/@types
interface ProductInfoProps {
  productId: string;
  name: string;
  category: string;
  price: number;
  rating?: number;
  reviews?: number;
  isRecipe: boolean;
}
// icons
import { BookmarkPlus, BookmarkCheck, Star } from "lucide-react";
// components
import Typography from "../../typography";

// main
const ProductInfo: FC<ProductInfoProps> = ({
  productId,
  name,
  category,
  price,
  rating,
  reviews,
  isRecipe,
}) => {
  // state
  const { dispatch } = useSlices("globalController");
  const [marked, setMarked] = useState<boolean>(false);
  // handler functions
  const markFavorite = async () => {
    const result = await addFavorite(productId);
    console.log(result);
    // set notification
    await dispatch(
      handleNotification({
        type: "success",
        message: "Product marked as Favorite.",
      }),
    );
    // change state
    await setMarked(true);
  };

  return (
    <>
      <div className="mb-6">
        {/* Title row with favorite button */}
        <div className="flex justify-between items-start gap-4">
          <Typography variant="head" className="mb-2">
            {name}
          </Typography>
          <button
            onClick={markFavorite}
            className="p-2 bg-[#E7F6F2] rounded-full text-[#395B64] hover:bg-[#A5C9CA]/20 transition-colors shrink-0 cursor-pointer"
          >
            {marked ? (
              <BookmarkCheck size={20} className="text-green-600" />
            ) : (
              <BookmarkPlus size={20} />
            )}
          </button>
        </div>

        {/* Category label */}
        <Typography className="text-lg font-bold text-[#A5C9CA] mb-4">
          {category}
        </Typography>

        {/* Star rating (products only, not recipes) */}
        <div className="flex items-center gap-4">
          {!isRecipe && rating && (
            <div className="flex items-center gap-1 bg-[#E7F6F2] px-3 py-1.5 rounded-lg">
              <Star className="w-5 h-5 fill-amber-500 text-amber-500 mr-1" />
              <span className="font-bold text-[#2C3333]">{rating}</span>
              <span className="text-[#395B64] text-sm ml-1">
                ({reviews} reviews)
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <span className="text-4xl font-black text-[#395B64]">
          ${price.toFixed(2)}
        </span>
      </div>

      {/* Description */}
      <div className="prose prose-stone text-[#395B64] mb-8">
        <Typography className="text-lg leading-relaxed">
          {isRecipe
            ? "Unlock the secrets of artisan baking with this comprehensive digital recipe. Includes step-by-step instructions, video tutorials, and troubleshooting tips from our master bakers."
            : "Handcrafted with the finest ingredients, this delightful treat is perfect for any occasion. Baked fresh daily to ensure maximum flavor and perfect texture."}
        </Typography>
      </div>
    </>
  );
};

export default ProductInfo;
