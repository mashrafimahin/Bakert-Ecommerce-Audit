// dependencies
import type { FC } from "react";
// interface/@types
import type { CartItem } from "../../app/features/globalController";
interface ProductInfoType {
  info: CartItem;
}
// components
import Typography from "../typography";
import Button from "./button";
//
// main
const OrderCard: FC<ProductInfoType> = ({ info }) => {
  return (
    <div className="bg-white border border-[#A5C9CA]/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-[#E7F6F2] pb-5 mb-5 gap-4">
        <div>
          <Typography className="text-sm font-bold text-[#A5C9CA]">
            Order
          </Typography>
          <Typography className="font-bold text-[#2C3333] mt-1">
            Placed on {info.date}
          </Typography>
        </div>
        <div className="flex items-center gap-4">
          <span className="px-4 py-1.5 bg-[#E7F6F2] text-[#395B64] text-sm font-bold rounded-full border border-[#A5C9CA]/50">
            Placed
          </span>
          <span className="font-black text-xl text-[#2C3333]">
            ${info.price.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="flex max-[532px]:flex-col items-center gap-5">
        <div className="w-24 h-24 max-[532px]:w-full max-[532px]:h-50 rounded-2xl overflow-hidden bg-[#E7F6F2] shrink-0">
          <img
            src={info.image}
            alt="Cake"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>
        <div className="flex-1 max-[532px]:text-center">
          <h4 className="font-bold text-lg text-[#2C3333]">{info.name}</h4>
          <p className="text-sm font-medium text-[#395B64] mt-1">
            Quantity: {info.quantity}
          </p>
        </div>
        <Button
          variant="secondary"
          className="w-auto text-md bg-gray-100 px-6 hover:bg-[#2C3333] hover:text-white transition-all"
        >
          {info.category === "recipe" ? "View Recipe" : "Buy Again"}
        </Button>
      </div>
    </div>
  );
};

// exports
export default OrderCard;
