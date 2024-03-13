// import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import 'core-js/stable/atob.js';

ISO_URL = 'http://localhost:3000/auth';
ANDROID_URL = 'http://10.0.2.2:3000/auth';

const initialState = {
  user: '',
  isLoading: false,
  error: null,
};

export const getUser = createAsyncThunk('getUser', async (token, thunkApi) => {
  try {
    const decoded = jwtDecode(token);
    let id = decoded.userId;
    const { data } = await axios.get(`${ANDROID_URL}/getUser/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // login cases
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default userSlice.reducer;
