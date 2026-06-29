// dependencies
import { lazy, Suspense, useEffect, useRef, useState, type FC } from "react";
import { Route, Routes } from "react-router-dom";
// utilities
import PrivateRoute from "./utils/PrivateRoute";
// controller
import useSlices from "./hooks/useSlices";
import type { GlobalState } from "./app/features/globalController";
import type { AppDispatch } from "./app/store";
import { productThunk } from "./app/features/productController";
import { authCheckThunk } from "./app/features/authenticationController";
// components
import Loader from "./components/ui/Loader";
import ToastNotification from "./components/ui/ToastNotification";
// layouts
import Cart from "./layouts/CartPopup";
// pages
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const About = lazy(() => import("./pages/About"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

// main
const App: FC = () => {
  // state
  const [show, setShow] = useState<boolean>(true);
  const { data } = useSlices("globalController") as {
    data: GlobalState;
    dispatch: AppDispatch;
  };
  const { dispatch: authDispatch } = useSlices("authController");
  const { dispatch } = useSlices("productController");
  const initialized = useRef(false);

  // on audit handler
  const handleClick = () => {
    localStorage.setItem("user_access", import.meta.env.VITE_TEST_ID);
    setShow(false);
  };

  // fetch products on mount
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    dispatch(productThunk());
    authDispatch(authCheckThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // checking
  // if (productState.isLoading) {
  //   return <Loader />;
  // }

  return (
    <>
      {/* cart popup */}
      {data.showPopup && <Cart />}
      {/* Notification */}
      <ToastNotification />
      {/* routes */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy&policy" element={<Privacy />} />
          <Route path="/terms&conditions" element={<Terms />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route element={<PrivateRoute />}>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
        {/* audit method */}
        {show && (
          <button
            onClick={handleClick}
            className="fixed bottom-10 right-10 p-3 px-4 bg-black text-white text-md z-9999 rounded-md shadow-sm cursor-pointer"
          >
            Audit Mode
          </button>
        )}
      </Suspense>
    </>
  );
};

export default App;
