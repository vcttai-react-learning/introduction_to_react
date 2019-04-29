import axios from 'axios';

const API_KEY = 'AIzaSyArev5TvXtMZwjkjho3v_Tmbe4wwrORY-s'; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: API_KEY,
    }
});