// dependencies
import type { FC } from "react";
// controllers
import useSlices from "../hooks/useSlices";
// components
import Typography from "../components/typography";
import OrderCard from "../components/ui/orderCard";

// main
const OrderHistory: FC = () => {
  // state
  const { data } = useSlices("productController");
  const orders = data.orderedProducts;

  return (
    <div className="flex-1">
      <Typography variant="subHead" className="mb-4 ml-2">
        Recent Orders
      </Typography>

      {/* Order Item */}
      <div className="space-y-6">
        {orders.map((item) => (
          <OrderCard key={item.id} info={item} />
        ))}
      </div>
    </div>
  );
};

// exports
export default OrderHistory;
