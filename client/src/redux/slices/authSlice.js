import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { persistor } from 'redux/store';
ISO_URL = 'http://localhost:3000/auth';
ANDROID_URL = 'http://10.0.2.2:3000/auth';

const initialState = {
  token: null,
  isLoading: false,
  success: null,
  error: null,
};

// login
export const login = createAsyncThunk('login', async (user, thunkApi) => {
  try {
    const res = await axios.post(`${ANDROID_URL}/login`, user);
    return res.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data.message);
  }
});
// register
export const register = createAsyncThunk('register', async (user, thunkApi) => {
  try {
    await axios.post(`${ANDROID_URL}/register`, user);
    const msg = { status: 'success', message: 'User Created Successful' };
    return msg;
  } catch (error) {
    const msg = { status: 'error', message: err.response.data.message };
    return thunkApi.rejectWithValue(msg);
  }
});

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // login cases
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.success = 'Login successfully';
      state.token = action.payload.token;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default authSlice.reducer;
