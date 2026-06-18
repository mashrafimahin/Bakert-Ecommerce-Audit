// dependencies
import { lazy, Suspense, useEffect, type FC } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./layouts/CartPopup";
// controller
import useSlices from "./hooks/useSlices";
import Loader from "./components/ui/Loader";
import { productThunk } from "./app/features/productController";
// pages
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const About = lazy(() => import("./pages/About"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Contact = lazy(() => import("./pages/Contact"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

// main
const App: FC = () => {
  // state
  const { data } = useSlices("globalController");
  const { data: productState, dispatch } = useSlices("productController");

  // fetch products on mount
  useEffect(() => {
    dispatch(productThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // checking
  if (productState.isLoading) {
    return <Loader />;
  }

  return (
    <>
      {/* cart popup */}
      {data.showPopup && <Cart />}
      {/* routes */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
