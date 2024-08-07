import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { UsersStateType } from '../../../types/user';
import getAllUsers from './userThunks';

const initialState: UsersStateType = {
  users: [],
  isLoading: false,
  error: null,
};

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    });
    builder.addMatcher(
      (action: PayloadAction) => action.type.endsWith('/rejected'),
      (state) => {
        state.error = 'Возникла ошибка';
      },
    );
  },
});

export default wordSlice.reducer;
