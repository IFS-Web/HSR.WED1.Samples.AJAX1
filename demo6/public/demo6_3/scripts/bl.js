const BASE_URL = '/api/music';

const musicService = {
    async getAll() {
        const response = await fetch(BASE_URL);
        return await response.json();
    }
};


