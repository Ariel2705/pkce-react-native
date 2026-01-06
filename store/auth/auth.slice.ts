import { createSlice } from '@reduxjs/toolkit';
import { clearTokens } from './auth.storage';
import { loginWithKeycloak, logoutThunk, refreshTokenThunk } from './auth.thunks';
import { AuthState } from './auth.types';

const initialState: AuthState = {
  loading: false,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      clearTokens();
      state.accessToken = undefined;
      state.refreshToken = undefined;
      state.idToken = undefined;
      state.isAuthenticated = false;
    },
    restoreSession: (state, action) => {
      Object.assign(state, action.payload);
      state.isAuthenticated = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginWithKeycloak.pending, state => {
        state.loading = true;
      })
      .addCase(loginWithKeycloak.fulfilled, (state, action) => {
        Object.assign(state, action.payload);
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(loginWithKeycloak.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(refreshTokenThunk.fulfilled, (state, action) => {
        Object.assign(state, action.payload);
      })
      .addCase(logoutThunk.fulfilled, state => {
        state.isAuthenticated = false;
      });
  },
});

export const { logout, restoreSession } = authSlice.actions;
export default authSlice.reducer;
