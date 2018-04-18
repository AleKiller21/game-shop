import axios from 'axios';

// const urlBase = 'http://python.api.com';
const urlBase = 'http://127.0.0.1:5000';

export default class apiService {
    static async sendRequest(uri, method, data={}) {
        const url = `${urlBase}${uri}`;
        const token = localStorage.getItem('token');
        const config = {};

        if (token) config.headers = { Authorization: token };

        switch (method) {
            case 'GET':
                return await axios.get(url, config);
            case 'POST':
                return await axios.post(url, data, config);
            case 'PUT':
                return await axios.put(url, data, config);
            case 'DELETE':
                return await axios.delete(url, config);        
            default:
                break;
        }

        // return method === 'GET' ? await axios.get(url, config) : await axios.post(url, data, config);
    }
}
