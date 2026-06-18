// dependencies
import { type FC } from "react";
// interface/@types
interface ProductImageProps {
  image: string;
  name: string;
  isRecipe: boolean;
}

// main
const ProductImage: FC<ProductImageProps> = ({ image, name, isRecipe }) => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="relative aspect-square sm:aspect-4/3 lg:aspect-4/5 rounded-xl overflow-hidden bg-[#E7F6F2] mb-6">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          draggable={false}
        />
        {isRecipe && (
          <span className="absolute top-6 left-6 bg-[#395B64] text-white text-xs font-black px-4 py-2 rounded-full tracking-wide shadow-md">
            DIGITAL RECIPE
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductImage;
