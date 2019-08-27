import axios from 'axios';

const KEY = 'AIzaSyACbZ41c8PYr5scY_yN0tvfyqV7cCdUGuY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        key: KEY
    }
});
