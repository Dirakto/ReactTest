import axios from 'axios';
import {db_link} from './global-config';

const axiosCars = axios.create({
    baseURL: db_link
});

export default axiosCars;