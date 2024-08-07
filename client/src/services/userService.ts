import type { AxiosInstance } from 'axios';
import { userSchema, type UserType } from '../types/user';
import axiosClient from './httpClient';

class UserService {
  constructor(private readonly client: AxiosInstance) {}

  async getAllUsers(): Promise<UserType[]> {
    try {
      const res = await this.client('/users');
      if (res.status === 200) {
        return userSchema.array().parse(res.data);
      }
      return [];
    } catch (error) {
      console.log(error);
      return Promise.reject(new Error('Неверный статус код'));
    }
  }
}

const userService = new UserService(axiosClient);

export default userService;
