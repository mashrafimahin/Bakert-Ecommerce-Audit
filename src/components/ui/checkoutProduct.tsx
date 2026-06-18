// dependencies
import type { FC } from "react";
// interface/@types
export interface ProductData {
  product: {
    image: string;
    title: string;
    quantity: number;
    price: number;
  };
}

// main
const CheckoutProduct: FC<ProductData> = ({ product }) => {
  return (
    <div className="flex justify-between items-center pb-4 border-b border-[#395B64]">
      <div className="flex gap-4 items-center">
        <div className="w-12 h-12 rounded-lg bg-[#E7F6F2] overflow-hidden">
          <img
            src={product.image}
            alt="Item"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>
        <div>
          <h4 className="font-bold text-sm">{product.title}</h4>
          <p className="text-[#A5C9CA] text-xs">Quantity: {product.quantity}</p>
        </div>
      </div>
      <span className="font-bold">${product.price.toFixed(2)}</span>
    </div>
  );
};

// exports
export default CheckoutProduct;
