import { createSlice } from '@reduxjs/toolkit';
import getCookie from '../../utils/getCookie';


const initialState = {
  token: '',
  isLogin: Boolean(getCookie('username'))
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state) => {
      state.isLogin = true;
    },
    setLogout: (state) => {
      state.isLogin = false;
      state.token = '';
    },
    setToken: (state, action) => {
      state.token = action.payload;
    }
  }
});

export const { setLogin, setToken, setLogout } = authSlice.actions;
export default authSlice.reducer;