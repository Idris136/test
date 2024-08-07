import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/users/userSlice';
import notifyReducer from './slices/notifySlice';

export const store = configureStore({
  reducer: {
    user: usersReducer,
    notify: notifyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
