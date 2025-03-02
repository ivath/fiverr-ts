import { Token } from './../../node_modules/acorn/dist/acorn.d';
import axios from "axios";
export const http = axios.create({
    baseURL: 'https://fiverrnew.cybersoft.edu.vn/api',
    timeout: 30000,
    headers: {tokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4MiIsIkhldEhhblN0cmluZyI6IjMwLzEwLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc2MTc4MjQwMDAwMCIsIm5iZiI6MTczNDI4MjAwMCwiZXhwIjoxNzYxOTMwMDAwfQ.CA6BQDcIhQBMqMflDSrrl03owd3zWszFKIb_0AXaF0U"}
  });