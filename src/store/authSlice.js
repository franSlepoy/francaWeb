import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  accessToke:"",
  isLogged: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRedux: (state, action)=> {
      console.log("llego al reducer", action.payload)
    }
  },
});

// Action creators are generated for each case reducer function
export const {loginRedux} = authSlice.actions;

export default authSlice.reducer;