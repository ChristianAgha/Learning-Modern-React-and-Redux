import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4663c1bef721e540d62743c27abc02d122c920c447e5bb293ca3ecaba2200c7a'
    }
});

