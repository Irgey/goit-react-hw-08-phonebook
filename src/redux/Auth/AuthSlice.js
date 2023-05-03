import { createSlice } from '@reduxjs/toolkit';
import {
  registerThunk,
  loginThunk,
  refreshThunk,
  logOutThunk,
} from './AuthOperations';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isOnline: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.token = payload.token;
        state.isOnline = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.user = payload.user;
        state.token = payload.token;
        state.isOnline = true;
      })
      .addCase(logOutThunk.fulfilled, (state, { payload }) => {
        state.user = '';
        state.token = '';
        state.isOnline = false;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isOnline = true;
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        state => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});
export const authReducer = authSlice.reducer;
// [refreshThunk.pending]: (state, { payload }) => {
// 			state.loading = true
// 		},

// 		[refreshThunk.fulfilled]: (state, { payload }) => {
// 			state.online = true
// 			state.loading = false
// 			state.user = payload
// 		},
// 		[refreshThunk.rejected]: (state, { payload }) => {
// 			state.error = payload
// 			state.loading = false
// 		},
