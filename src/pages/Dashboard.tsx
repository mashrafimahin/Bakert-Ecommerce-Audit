// dependencies
import { useEffect, type FC } from "react";
// interface/@types
interface ViewTypes {
  order: FC;
  favorite: FC;
  settings: FC;
}
// controller
import useSlices from "../hooks/useSlices";
import { dashboardThunk } from "../app/features/dashboardController";
// components
import Loader from "../components/ui/Loader";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
import DashboardSide from "../components/ui/dashboardSide";
// layouts
import OrderHistory from "../layouts/OrderHistory";
import FavoriteLayout from "../layouts/FavoriteLayout";
import ProfileLayout from "../layouts/ProfileLayout";
// view components
const VIEW_COMPONENTS: ViewTypes = {
  order: OrderHistory,
  favorite: FavoriteLayout,
  settings: ProfileLayout,
};

// main
const Dashboard: FC = () => {
  // state
  const { data, dispatch } = useSlices("dashboardController");

  // view components
  const CurrentView = VIEW_COMPONENTS[data.viewState];

  // auto scroll + fetch data
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(dashboardThunk());
  }, [dispatch]);

  // return loader
  if (data.isLoading) {
    return <Loader />;
  }

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
          {CurrentView && <CurrentView />}
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default Dashboard;
