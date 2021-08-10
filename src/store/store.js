import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {auth: authReducer}
});


// const store = configureStore({ auth: authReducer })

export default store;