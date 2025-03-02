import axios from "axios";
export const http = axios.create({
    baseURL: 'https://fiverrnew.cybersoft.edu.vn/api',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });