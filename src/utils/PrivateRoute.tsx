// dependencies
import { Navigate, Outlet } from "react-router-dom";
import useSlices from "../hooks/useSlices";
import { handleNotification } from "../app/features/globalController";
// controller

// main
const PrivateRoute = () => {
  // state
  const { dispatch } = useSlices("globalController");
  const { data: auth } = useSlices("authController");

  if (!auth.isLoggedIn) {
    dispatch(
      handleNotification({
        type: "warning",
        message: "You need to login first.",
      }),
    );
  }

  return auth.isLoggedIn ? <Outlet /> : <Navigate to="login" replace />;
};

// exports
export default PrivateRoute;
