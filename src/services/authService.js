import apiService from './apiService';

class authService {
    static async isCurrentUserAdmin () {
        try {
            const response = await apiService.sendRequest('/user/isadmin', 'GET');
            return response.data.data.admin;
        } catch (err) {
            console.error(err);
            return false;
        }
    }
}

export default authService;