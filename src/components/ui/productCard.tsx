// interface
interface ProductData {
  product: {
    category: string;
    id: string;
    image: string;
    isNew: boolean;
    name: string;
    price: number;
    rating: number;
    reviews: number;
  };
}
// dependencies
import { useState, type FC } from "react";
// controller
import useSlices from "../../hooks/useSlices";
// icons
import { CheckCheck, Star } from "lucide-react";
import Button from "./button";
import { handleAddCart } from "../../app/features/globalController";

// main
const ProductCard: FC<ProductData> = ({ product }) => {
  // state
  const { dispatch } = useSlices("globalController");
  const [btnState, setBtnState] = useState<boolean>(false);

  // handle add
  const handleAdd = (): void => {
    setBtnState(true);
    dispatch(handleAddCart({ ...product, quantity: 1 }));
    setTimeout(() => {
      setBtnState(false);
    }, 1000);
  };

  return (
    <div key={product.id} className="group flex flex-col">
      <div className="relative aspect-4/5 rounded-3xl overflow-hidden mb-5 bg-[#E7F6F2]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[#2C3333]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-[#395B64] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
            NEW
          </span>
        )}
        <Button
          variant="primary"
          buttonHandler={handleAdd}
          className="absolute max-w-55 ml-6 bottom-4 bg-white/95 backdrop-blur-sm text-[#2C3333] font-bold py-3 rounded-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#395B64] hover:text-white shadow-lg cursor-pointer"
        >
          {btnState ? (
            <>
              <CheckCheck size={20} className="text-green-400" />
              &nbsp; Added
            </>
          ) : (
            "Add To Cart"
          )}
        </Button>
      </div>
      <div className="flex justify-between items-start gap-4 px-1">
        <div>
          <h3 className="font-bold text-[#2C3333] text-lg">{product.name}</h3>
          <p className="text-sm text-[#395B64] mb-2 font-medium">
            {product.category}
          </p>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-bold text-[#2C3333]">
              {product.rating}
            </span>
            <span className="text-sm text-[#A5C9CA]">({product.reviews})</span>
          </div>
        </div>
        <span className="font-bold text-lg text-[#395B64] bg-[#E7F6F2] px-3 py-1 rounded-lg">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
