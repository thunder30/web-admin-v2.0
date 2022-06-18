import axios from 'axios'
import { BASE_URL } from '../../config/serverApiConfig'
import setHeaderToken from '../../helpers/setHeaderToken'
import { token } from './../auth'
import successHandler from '../../../request/successHandler'
import errorHandler from '../../../request/errorHandler'

const getUsers = async () => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.get(BASE_URL + '/users')
        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}

const addUsers = async () => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.post(BASE_URL + '/users')
        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}

const getUsersId = async (id) => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.get(BASE_URL + '/users/' + id)
        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}

const updateUsers = async (id) => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.put(BASE_URL + '/users/' + id)
        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}

const deleteUsers = async (id) => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.delete(BASE_URL + '/users/' + id)
        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}

const getPitchUsers = async (id) => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.get(BASE_URL + '/users/' + id + '/pitch-branches')
        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}

const getBookingUsers = async (id) => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.get(BASE_URL + '/users/' + id + '/bookings')
        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}

const getTransactionsUsers = async (id) => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {   
        const res = await axios.get(BASE_URL + '/users/' + id + '/transactions')
        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}

export {getUsers, addUsers, getUsersId, updateUsers, deleteUsers, getPitchUsers, getBookingUsers, getTransactionsUsers}