// dependencies
import { type FC } from "react";
// controller
import useSlices from "../hooks/useSlices";
import type { CartItem } from "../app/features/globalController";
import {
  handlePopup,
  handleRemoveItem,
  handleUpdate,
} from "../app/features/globalController";
// icons
import { ShoppingBag, X, Trash2 } from "lucide-react";
import Typography from "../components/typography";
import Button from "../components/ui/button";

// main
const Cart: FC = () => {
  // state
  const { data, dispatch } = useSlices("globalController");
  // product data
  const product = data.cartDetails;
  // calculated data
  const totalPrice = data.totalPrice;
  const productDetails = [
    {
      title: "Subtotal",
      value: totalPrice,
    },
    {
      title: "Shipping",
      value: "Calculated at checkout",
    },
  ];

  // handle close
  const handleClick = (): void => {
    dispatch(handlePopup());
  };

  // handle remove
  const handleRemove = (item: object): void => {
    dispatch(handleRemoveItem(item));
  };

  // update count
  const handleCount = (
    type: "increment" | "decrement",
    item: CartItem,
  ): void => {
    dispatch(
      handleUpdate({
        id: item.id,
        type: type,
      }),
    );
  };

  return (
    <>
      <div className="fixed inset-0 bg-[#2C3333]/40 z-60 backdrop-blur-sm" />
      <div className="fixed right-0 top-0 bottom-0 w-full sm:w-100 bg-white z-70 shadow-2xl flex flex-col">
        {/* header */}
        <div className="p-6 border-b border-[#E7F6F2] flex justify-between items-center bg-[#E7F6F2]/50">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#395B64]" />
            <Typography variant="subHead" className="mb-0 ml-1 text-xl">
              Your Cart
            </Typography>
          </div>
          <button
            onClick={handleClick}
            className="p-2 rounded-full hover:bg-white text-[#395B64] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* inside box */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-white">
          {product.length > 0 ? (
            product.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 border border-[#A5C9CA]/30 rounded-2xl"
              >
                <img
                  src={item.image}
                  alt="Cake"
                  className="w-20 h-20 rounded-xl object-cover"
                  draggable={false}
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-[#2C3333] text-sm line-clamp-1">
                      {item.name}
                    </h4>
                    <p className="text-[#395B64] font-semibold mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    {/* counter */}
                    <div className="flex items-center gap-3 bg-[#E7F6F2] rounded-lg p-1">
                      <button
                        onClick={() => handleCount("decrement", item)}
                        className="w-6 h-6 flex items-center justify-center rounded text-[#395B64] hover:bg-white cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-sm font-bold text-[#2C3333]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleCount("increment", item)}
                        className="w-6 h-6 flex items-center justify-center rounded text-[#395B64] hover:bg-white cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemove(item)}
                      className="p-1.5 text-red-400 hover:text-red-500 hover:bg-red-50 rounded-lg cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center mt-4">No items added.</p>
          )}
        </div>

        {/* lower info */}
        <div className="p-6 border-t border-[#A5C9CA]/30 bg-[#E7F6F2]/30">
          <div className="space-y-3 mb-6">
            {productDetails.map((item) => (
              <div
                key={item.title}
                className="flex justify-between text-sm text-[#2C3333]/70"
              >
                <span>{item.title}</span>
                <span className="font-medium">
                  {item.title === "Subtotal"
                    ? `$${totalPrice.toFixed(2)}`
                    : item.value}
                </span>
              </div>
            ))}
            <div className="flex justify-between font-bold text-xl text-[#2C3333] pt-3 border-t border-[#A5C9CA]/30">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <Button variant="primary" className="text-md">
            Purchase Securely
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
