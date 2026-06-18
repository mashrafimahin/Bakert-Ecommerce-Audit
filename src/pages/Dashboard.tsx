// dependencies
import { useEffect, type FC } from "react";
// components
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
import Typography from "../components/typography";
import OrderCard from "../components/ui/orderCard";
import DashboardSide from "../components/ui/dashboardSide";

// main
const Dashboard: FC = () => {
  // auto scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* navigation */}
      <Navbar />

      {/* main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full bg-[#E7F6F2] min-h-screen">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <DashboardSide />

          {/* Main Content */}
          <div className="flex-1">
            <Typography variant="subHead" className="mb-4 ml-2">
              Recent Orders
            </Typography>

            {/* Order Item */}
            <div className="space-y-6">
              <OrderCard />
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default Dashboard;
