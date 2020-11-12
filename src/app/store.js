import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import appReducer from "../features/appSlice"
import basketReducer from "../features/basketSlice"


export default configureStore({
  reducer: {
    user: userReducer,
    app:appReducer,
    basket:basketReducer
  },
});