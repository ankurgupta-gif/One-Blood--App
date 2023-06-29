import { configureStore } from "@reduxjs/toolkit";
import authslice from "./features/auth/authSlice";
const store = configureStore({
  reducer: {
    auth: authslice.reducer,
  },
});
export default store;
