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

const login = async ({ email, password }) => {
    try {
        const res = await axios.post(`${BASE_URL}/auth/login`, {
            email,
            password,
        })

        if (res.data.success) {
            if (
                res.data.roles.includes('CHU_SAN') ||
                res.data.roles.includes('ADMIN')
            ) {
                setCookie(BASE_URL, res.data.accessToken)
            } else {
                res.data.success = false
                res.data.message = 'Sai email hoặc mật khẩu!'
            }
            // get user
        }

        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}

const logout = async () => {
    token.remove()
}

const token = {
    get() {
        return getCookie(BASE_URL)
    },
    set(token) {
        setCookie(BASE_URL, token)
    },
    remove() {
        removeCookie(BASE_URL)
    },
}

export { getMe, login, logout, token }
