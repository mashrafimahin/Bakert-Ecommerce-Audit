// dependencies
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Authentication from "../../handlers/authHandler";
// class
const auth = new Authentication();
// interface/@types
import type { LoginInfo } from "../../pages/Login";
import type { SignupInfo } from "../../pages/SignUp";
interface ProfilePattern {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  zip: string | number;
}
interface passChange {
  currentPass: string;
  newPass: string;
}
interface authPattern {
  isLoading: boolean;
  isLoggedIn: boolean;
  alertOn: boolean;
  alertMessage: string;
  profileData: ProfilePattern;
  changedPass: passChange;
}

const initialState: authPattern = {
  isLoading: false,
  isLoggedIn: false,
  alertOn: false,
  alertMessage: "",
  profileData: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    zip: "",
  },
  changedPass: {
    currentPass: "",
    newPass: "",
  },
};

// data fetch thunk — auth check
export const authCheckThunk = createAsyncThunk("auth/check", async () => {
  const result = await auth.authChecking();
  return result;
});

// data fetch thunk — signup
export const signupThunk = createAsyncThunk(
  "auth/signup",
  async (userInfo: SignupInfo) => {
    const result = await auth.signupProcess(userInfo);
    return result;
  },
);

// data fetch thunk — login
export const loginThunk = createAsyncThunk(
  "auth/login",
  async (userInfo: LoginInfo) => {
    const result = await auth.loginProcess(userInfo);
    return result;
  },
);

// data fetch thunk — logout
export const logOutThunk = createAsyncThunk("auth/logout", async () => {
  await auth.logoutProcess();
});

// slice
const AuthSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // auth check
      .addCase(authCheckThunk.pending, () => {})
      .addCase(authCheckThunk.fulfilled, (state, action) => {
        if (!action.payload.success) {
          state.isLoggedIn = action.payload.success;
        } else {
          state.isLoggedIn = action.payload.success;
          state.profileData = action.payload.profile;
        }
      })
      .addCase(authCheckThunk.rejected, () => {})

      // signup
      .addCase(signupThunk.pending, (state) => {
        state.isLoading = true;
        state.alertOn = false;
        state.alertMessage = "";
      })
      .addCase(signupThunk.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.isLoading = false;
          state.isLoggedIn = true;
        } else {
          state.alertOn = true;
          state.alertMessage = action.payload.message;
        }
      })
      .addCase(signupThunk.rejected, () => {})

      // login
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.alertOn = false;
        state.alertMessage = "";
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        if (action.payload.success) {
          state.isLoading = false;
          state.isLoggedIn = true;
        } else {
          state.alertOn = true;
          state.alertMessage = action.payload.message;
        }
      })
      .addCase(loginThunk.rejected, () => {})

      // logout
      .addCase(logOutThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logOutThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.isLoggedIn = false;
      })
      .addCase(logOutThunk.rejected, () => {});
  },
});

// exports
export default AuthSlice.reducer;
