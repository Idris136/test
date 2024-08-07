import { createAsyncThunk } from '@reduxjs/toolkit';
import userService from '../../../services/userService';
import { setNotify } from '../notifySlice';

const getAllUsers = createAsyncThunk('user/getAllUsers', async (_, { dispatch }) => {
  try {
    const users = await userService.getAllUsers();
    dispatch(setNotify({ type: 'success', message: 'Пользователи успешно загружены' }));
    return users;
  } catch (error) {
    console.error('Ошибка при получении пользователей:', error);
    dispatch(setNotify({ type: 'error', message: 'Не удалось загрузить пользователей' }));
    throw error;
  }
});

export default getAllUsers;
