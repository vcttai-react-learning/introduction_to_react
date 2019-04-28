import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ee9607c5aaa8691987b55ebf2268174f731678aef3aa1d5af9b2dbd99c0aa447'
    }
});