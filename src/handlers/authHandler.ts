// interface/@types
import type { LoginInfo } from "../pages/Login";
import type { SignupInfo } from "../pages/SignUp";

// main
class Authentication {
  // auth check
  authChecking = async () => {
    const userId = localStorage.getItem("user_access");
    try {
      if (userId) {
        const response = await fetch(`${import.meta.env.VITE_API_KEY}/check`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
          credentials: "include",
        });
        const data = await response.json();
        if (data.success) {
          return data.success;
        } else {
          throw Error("Authentication Failed! Login again.");
        }
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  // signup
  signupProcess = async (userInfo: SignupInfo) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_KEY}/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
          credentials: "include",
        },
      );
      const data = await response.json();
      if (data.success) {
        // save data -> local
        localStorage.setItem("user_access", data.userId);
        localStorage.setItem("refresh", data.refreshToken);

        return data;
      } else {
        throw Error("Signup Failed! Try again.");
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  // login
  loginProcess = async (userInfo: LoginInfo) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_KEY}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
          credentials: "include",
        },
      );
      const data = await response.json();
      if (data.success) {
        // save data -> local
        localStorage.setItem("user_access", data.userId);
        localStorage.setItem("refresh", data.refreshToken);

        return data;
      } else {
        throw Error("Login Failed! Try again.");
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  // login
  logoutProcess = async () => {
    const userId = localStorage.getItem("user_access");
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_KEY}/auth/logout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
          credentials: "include",
        },
      );
      const data = await response.json();
      if (data.success) {
        // clear -> local
        localStorage.clear();
      } else {
        throw Error("Logout Failed! Try again.");
      }
    } catch (err) {
      console.log(err);
    }
  };
}
export default Authentication;
