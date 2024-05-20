import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = 'https://663d58f4e1913c476793fc2c.mockapi.io';

export const register = createAsyncThunk('auth/register', async (_, thunkAPI) =>
{ try {
    // const response = await axios.get('/');
    // return response.data;
} catch (error) {
    return thunkAPI.rejectWithValue(error.message);
}
})


export const login = createAsyncThunk('auth/login', async (_, thunkAPI) =>
{
    try {
        // const response = await axios.post('/contacts',  newContact);
        // return response.data;
    } catch(error) {
    return thunkAPI.rejectWithValue(error.message);
}
})


export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) =>
{ try {
    // const response = await axios.delete(`/contacts/${ contactId }`);
    // return response.data;
} catch(error) {
    return thunkAPI.rejectWithValue(error.message);
}
})

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) =>
{ try {
    // const response = await axios.delete(`/contacts/${ contactId }`);
    // return response.data;
} catch(error) {
    return thunkAPI.rejectWithValue(error.message);
}
})