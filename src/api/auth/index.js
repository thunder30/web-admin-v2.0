import axios from 'axios'
import { BASE_URL, TOKEN_NAME } from '../../config/serverApiConfig'
import setHeaderToken from '../../helpers/setHeaderToken'
import { getCookie, setCookie, removeCookie } from './cookie'
import successHandler from '../../request/successHandler'
import errorHandler from '../../request/errorHandler'

const getMe = async () => {
    const token = getCookie(TOKEN_NAME)
    setHeaderToken(token)
    //console.log(`token: `, token)

    try {
        const res = await axios.get(`${BASE_URL}/auth/me`)
        //console.log('service success')
        return successHandler(res)
    } catch (error) {
        //console.log('service error')
        removeCookie(TOKEN_NAME)
        setHeaderToken(null)
        return errorHandler(error)
    }
}

const login = async ({ phone, password }) => {
    try {
        const res = await axios.post(`${BASE_URL}/auth/login`, {
            phone,
            password,
        })
        
        if (res.data.success) {
            if (
                res.data.data.roles.includes('admin') ||
                res.data.data.roles.includes('partner')
            ) {
                setCookie(TOKEN_NAME, res.data.data.accessToken)
            } else {
                res.data.data.success = false
                res.data.data.message = 'Sai số điện thoại hoặc mật khẩu!'
            }
            // get user
        }

        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}

const logout = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/auth/logout`)
        removeCookie(TOKEN_NAME)
        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}

const token = {
    get() {
        return getCookie(TOKEN_NAME)
    },
    set(token) {
        setCookie(TOKEN_NAME, token)
    },
    remove() {
        removeCookie(TOKEN_NAME)
    },
}

export { getMe, login, logout, token }
