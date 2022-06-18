const API_BASE_URL =
    process.env.NODE_ENV !== 'production'
        ? 'http://172.16.4.186:5000/api'
        : 'https://datsanbong.herokuapp.com/api'
const ACCESS_TOKEN_NAME = 'PATE_TEAM_TOKEN'

const BASE_URL = 'https://corgisoccer.online/api'
const TOKEN_NAME = 'CORGI_SOCCER'

export { API_BASE_URL, ACCESS_TOKEN_NAME, BASE_URL, TOKEN_NAME }
