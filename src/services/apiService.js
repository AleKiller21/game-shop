import axios from 'axios';

const urlBase = 'http://localhost:5000';

export default class apiService {
    static async sendRequest(uri, method, data={}) {
        const url = `${urlBase}${uri}`;
        const token = localStorage.getItem('token');
        const config = {};

        if (token) config.headers = { Authorization: token };

        return method === 'GET' ? await axios.get(url, config) : await axios.post(url, data, config);
    }
}
