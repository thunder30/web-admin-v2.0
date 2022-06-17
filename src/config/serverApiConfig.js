const API_BASE_URL =
    process.env.NODE_ENV !== 'production'
        ? 'http://192.168.63.29:5000/api'
        : 'https://datsanbong.herokuapp.com/api'
const ACCESS_TOKEN_NAME = 'PATE_TEAM_TOKEN'

export { API_BASE_URL, ACCESS_TOKEN_NAME }
