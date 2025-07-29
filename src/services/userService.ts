import { httpClient } from './httpClient';
import { User } from './authService';
import { API_ENDPOINTS } from './config';

class UserService {
  async getAllUsers() {
    return await httpClient.get<User[]>(API_ENDPOINTS.USERS.BASE);
  }

  async getUser(userId: string) {
    return await httpClient.get<User>(API_ENDPOINTS.USERS.BY_ID(userId));
  }

  async updateUserRole(userId: string, role: string) {
    return await httpClient.put(API_ENDPOINTS.USERS.ROLE(userId), { role });
  }

  async deleteUser(userId: string) {
    return await httpClient.delete(API_ENDPOINTS.USERS.BY_ID(userId));
  }

  async resetUserPassword(userId: string) {
    return await httpClient.post(API_ENDPOINTS.USERS.RESET_PASSWORD(userId), {});
  }

  async getUserStats() {
    return await httpClient.get(API_ENDPOINTS.USERS.STATS);
  }
}

export const userService = new UserService();
export default userService; 