import { createSlice } from "@reduxjs/toolkit";
import { login, loginGoogle } from "./authThunk";

const initialState = {
  user: {},
  accessToken: "",
  isLogged: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /*  loginRedux: (state, action) => {
      
        state.accessToken = action.payload.accessToken
        state.isLogged = true;
      console.log("Llego el reducer", action.payload);
    }, */
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      console.log("se hizo el login",  action.payload);
      state.user = action.payload.userData;
      state.accessToken = action.payload.accessToken;
      state.isLogged = true;
      state.isLoading = false;
    });
    builder.addCase(login.pending, (state) => {
      console.log("cargando");
      state.isLoading = true;
    });
    builder.addCase(login.rejected, (state) => {
      console.log("no se hizo el login");
      state.isLoading = false;
    });
     builder.addCase(loginGoogle.fulfilled, (state, action) => {
      console.log("se hizo el login");
      state.user = action.payload.userData;
      state.accessToken = action.payload.accessToken;
      state.isLogged = true;
      state.isLoading = false;
     }); 
  },
});

// Action creators are generated for each case reducer function
export const { loginRedux } = authSlice.actions;

export default authSlice.reducer;
