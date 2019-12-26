import axios from 'axios';

const axiosInquiry = axios.create({
    baseURL: 'https://hw-65-f4d15.firebaseio.com/'
});

export default axiosInquiry;