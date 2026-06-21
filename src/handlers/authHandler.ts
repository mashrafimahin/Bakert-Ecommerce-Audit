// interface/@types
import type { UserInfo } from "../layouts/ProfileLayout";
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
          return data;
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
        // auto reload -> fetch user info
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 500);

        return data;
      } else {
        throw Error("Signup Failed! Try again.");
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  // signup
  updateProcess = async (userData: UserInfo) => {
    try {
      const userId = localStorage.getItem("user_access");
      const response = await fetch(
        `${import.meta.env.VITE_API_KEY}/auth/update`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId, ...userData }),
          credentials: "include",
        },
      );
      const data = await response.json();
      console.log(data);

      if (data.success) {
        // auto reload -> fetch user info
        setTimeout(() => {
          window.location.reload();
        }, 800);

        return data;
      } else {
        throw Error("Update Failed! Try again.");
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
        // auto reload -> fetch user info
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 500);

        return data;
      } else {
        throw Error("Login Failed! Try again.");
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  // logout
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
