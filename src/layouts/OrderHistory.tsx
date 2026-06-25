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
  const { data } = useSlices("dashboardController");
  const orders = data.orderHistory;

  return (
    <div className="flex-1">
      <Typography variant="subHead" className="mb-4 ml-2">
        Recent Orders
      </Typography>

      {/* Order Item */}
      {orders.length > 0 ? (
        <div className="space-y-6">
          {orders.map((item, i) => (
            <OrderCard key={i} info={item} />
          ))}
        </div>
      ) : (
        <p className="text-md ml-2 font-semibold">No history found.</p>
      )}
    </div>
  );
};

// exports
export default OrderHistory;
