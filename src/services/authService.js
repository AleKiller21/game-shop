import apiService from './apiService';

class authService {
    static isCurrentUserAdmin () {
        return this.getTokenPayload().role === 'admin';
    }

    static getTokenPayload () {
        let token = localStorage.getItem('token');
        if (!token) return false;

        token = token.split(' ')[1];
        const payload = token.split('.')[1];
        const data = window.atob(payload);

        return JSON.parse(data);
    }

    static logOut () {
        localStorage.removeItem('token');
    }
}

export default authService;