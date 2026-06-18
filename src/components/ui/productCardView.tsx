// dependencies
import { useState, type FC } from "react";
import { useNavigate } from "react-router";
// controller
import useSlices from "../../hooks/useSlices";
import { handleAddCart } from "../../app/features/globalController";
// interface/@types
export interface ProductData {
  product: {
    category: string;
    id: string;
    image: string;
    isNew?: boolean;
    name: string;
    price: number;
    rating?: number;
    reviews?: number;
  };
}
// icons
import { CheckCheck, Star } from "lucide-react";
import Button from "./button";

// main
const ProductCardView: FC<ProductData> = ({ product }) => {
  // state
  const { dispatch } = useSlices("globalController");
  const [btnState, setBtnState] = useState<boolean>(false);
  const navigate = useNavigate();

  // handle add
  const handleAdd = (): void => {
    setBtnState(true);
    dispatch(handleAddCart({ ...product, quantity: 1 }));
    setTimeout(() => {
      setBtnState(false);
    }, 1000);
  };

  // handle click
  const handleClick = (): void => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group bg-white rounded-lg border border-[#A5C9CA]/20 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col cursor-pointer"
    >
      {/* image */}
      <div className="relative aspect-4/3 overflow-hidden bg-[#E7F6F2]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
          draggable={false}
        />
      </div>
      {/* details */}
      <div className="p-6 pt-4 flex flex-col flex-1">
        <div className="mb-2">
          <h3 className="font-bold text-[#2C3333] text-xl leading-tight">
            {product.name}
          </h3>
          <p className="text-sm font-medium text-[#395B64] mt-1">
            {product.category}
          </p>
        </div>

        <div className="flex justify-between items-center mt-auto pt-4">
          <div className="flex items-center gap-1 bg-[#E7F6F2] px-2 py-1 rounded-lg">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-bold text-[#2C3333]">
              {product.rating}
            </span>
          </div>
          <span className="font-black text-xl text-[#395B64]">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <div onClick={(e) => e.stopPropagation()}>
          <Button variant="primary" buttonHandler={handleAdd} className="mt-4">
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
      </div>
    </div>
  );
};

// exports
export default ProductCardView;
