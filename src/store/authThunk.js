import { createAsyncThunk } from "@reduxjs/toolkit";
import {  loginWithGoogle, onSignInFirebase } from "../FirebaseConfig";

export const login = createAsyncThunk(
  "login",
  async (argument, { rejectWithValue }) => {
    let res = await onSignInFirebase(argument)
    if(res.user.accessToken){
        return res.user
    } else {
        rejectWithValue("Ocurrio un error")
    }
  }
);

export const loginGoogle = createAsyncThunk(
    "loginGoogle",
    async (_, { rejectWithValue }) => {
      let res = await loginWithGoogle()
      if(res.user.accessToken){
          return res.user
      } else {
          rejectWithValue("Ocurrio un error")
      }
    }
  );


