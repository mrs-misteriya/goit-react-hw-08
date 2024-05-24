import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./operations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },
    extraReducers: builder => {
        builder
            .addCase(register.pending, handlePending)
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(register.rejected, handleRejected)
            .addCase(login.pending, handlePending)
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(login.rejected, handleRejected)
            .addCase(logout.pending, handlePending)
            .addCase(logout.fulfilled, (state) => {
                state.user ={
                  name: null,
                  email: null,
                };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(logout.rejected, handleRejected)
            .addCase(refreshUser.pending, handlePending)
            .addCase(refreshUser.fulfilled, (state) => {
                state.user ={
            name: null,
            email: null,
                };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(refreshUser.rejected, handleRejected)
    }
})


export default authSlice.reducer;