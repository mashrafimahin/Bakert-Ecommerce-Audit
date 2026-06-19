// dependencies
import { Navigate, Outlet } from "react-router-dom";
import useSlices from "../hooks/useSlices";
import { handleNotification } from "../app/features/globalController";
// controller
const auth = false;

// main
const PrivateRoute = () => {
  // state
  const { dispatch } = useSlices("globalController");

  if (!auth) {
    dispatch(
      handleNotification({
        type: "warning",
        message: "You need to login first.",
      }),
    );
  }

  return auth ? <Outlet /> : <Navigate to="login" replace />;
};

// exports
export default PrivateRoute;
