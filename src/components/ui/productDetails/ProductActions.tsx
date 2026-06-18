// dependencies
import { useState, type FC } from "react";
import { Share2, ShieldCheck, Truck, Clock } from "lucide-react";
// interface/@types
interface ProductActionsProps {
  isRecipe: boolean;
  quantity: number;
  onDecrement: () => void;
  onIncrement: () => void;
  onAddToCart: () => void;
}
// icons
import { CheckCheck } from "lucide-react";
// components
import Button from "../button";

// main
const ProductActions: FC<ProductActionsProps> = ({
  isRecipe,
  quantity,
  onDecrement,
  onIncrement,
  onAddToCart,
}) => {
  // state
  const [btnState, setBtnState] = useState<boolean>(false);

  // handle add
  const handleAdd = (): void => {
    setBtnState(true);
    setTimeout(() => {
      setBtnState(false);
    }, 1800);
  };

  return (
    <div className="mt-auto space-y-6">
      {/* Quantity selector (products only) */}
      {!isRecipe && (
        <div className="flex items-center gap-4">
          <span className="font-bold text-[#2C3333]">Quantity</span>
          <div className="flex items-center bg-[#E7F6F2] rounded-xl p-1">
            <button
              onClick={onDecrement}
              className="w-10 h-10 flex items-center justify-center rounded-lg text-[#395B64] font-bold text-xl hover:bg-white transition-colors cursor-pointer"
            >
              -
            </button>
            <span className="w-12 text-center font-bold text-[#2C3333] text-lg">
              {quantity}
            </span>
            <button
              onClick={onIncrement}
              className="w-10 h-10 flex items-center justify-center rounded-lg text-[#395B64] font-bold text-xl hover:bg-white transition-colors cursor-pointer"
            >
              +
            </button>
          </div>
        </div>
      )}

      {/* Primary CTA + Share */}
      <div className="flex gap-4">
        <Button
          variant="primary"
          buttonHandler={() => {
            handleAdd();
            onAddToCart();
          }}
          className="flex-1 bg-[#395B64] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#2C3333] transition-colors shadow-lg shadow-[#395B64]/20"
        >
          {isRecipe ? (
            btnState ? (
              <>
                <CheckCheck size={20} className="text-green-400 mt-1" />
                &nbsp; Added
              </>
            ) : (
              "Buy Recipe Now"
            )
          ) : btnState ? (
            <>
              <CheckCheck size={20} className="text-green-400 mt-1" />
              &nbsp; Added
            </>
          ) : (
            "Add to Cart"
          )}
        </Button>
        <Button
          variant="secondary"
          className="w-auto px-6 border-2 border-gray-200"
        >
          <Share2 className="w-6 h-6" />
        </Button>
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
        <div className="flex items-center gap-3 text-sm font-bold text-[#395B64]">
          <ShieldCheck className="w-5 h-5 text-[#A5C9CA]" />
          <span>Quality Guarantee</span>
        </div>
        {!isRecipe && (
          <div className="flex items-center gap-3 text-sm font-bold text-[#395B64]">
            <Truck className="w-5 h-5 text-[#A5C9CA]" />
            <span>Local Delivery</span>
          </div>
        )}
        {isRecipe && (
          <div className="flex items-center gap-3 text-sm font-bold text-[#395B64]">
            <Clock className="w-5 h-5 text-[#A5C9CA]" />
            <span>Instant Access</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductActions;
