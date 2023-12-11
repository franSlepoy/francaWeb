import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { cartSlice } from './cartSlice'
import { authSlice } from './authSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['auth/loginRedux'], // Ignora esta acción específica si es no serializable
      },
    }),
});

