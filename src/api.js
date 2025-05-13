import axios from 'axios';

const API = axios.create({
baseURL: 'https://api.coingecko.com/api/v3',
});

export const getCryptoList = () =>
    API.get('/coins/markets', {
    params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 100,
            page: 1,
            sparkline: false,
        },
});

export const getCryptoDetails = (id) =>
API.get(`/coins/${id}`);