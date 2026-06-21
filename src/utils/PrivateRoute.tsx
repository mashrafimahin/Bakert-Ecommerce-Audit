// dependencies
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useSlices from "../hooks/useSlices";
import { handleNotification } from "../app/features/globalController";

// main
const PrivateRoute = () => {
  // state
  const { dispatch } = useSlices("globalController");
  const { data: auth } = useSlices("authController");

  useEffect(() => {
    if (!auth.isLoggedIn) {
      dispatch(
        handleNotification({
          type: "warning",
          message: "You need to login first.",
        }),
      );
    }
  }, [auth.isLoggedIn, dispatch]);

  return auth.isLoggedIn ? <Outlet /> : <Navigate to="login" replace />;
};

// exports
export default PrivateRoute;
