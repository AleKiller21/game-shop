import axios from 'axios';

const urlBase = 'http://localhost:5000';

export default class apiService {
    static async sendRequest(uri, method, data={}) {
        const url = `${urlBase}${uri}`;

        return method === 'GET' ? await axios.get(url) : await axios.post(url, data);
    }
}
