import axios from 'axios'
import { BASE_URL } from '../../../config/serverApiConfig'
import setHeaderToken from '../../../helpers/setHeaderToken'
import { token } from './../auth'
import successHandler from '../../../request/successHandler'
import errorHandler from '../../../request/errorHandler'

const getBooking = async () => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.get(BASE_URL + '/bookings')
        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}
const addBooking = async () => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.post(BASE_URL + '/bookings')
        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}

const getBookingID = async (id) => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.get(BASE_URL + '/bookings/' + id)
        return successHandler(res)
    }
    catch (error) {
        return errorHandler(error)
    }
}

const updateBooking = async (id) => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.put(BASE_URL + '/bookings/' + id)
        return successHandler(res)
    }
    catch (error) {
        return errorHandler(error)
    }
}

const checkPitchBooking = async ()  => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.post(BASE_URL + '/bookings/check-pitch')
        return successHandler(res)
    }
    catch (error) {
        return errorHandler(error)
    }
}

const getDetailBooking = async (id) => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.get(BASE_URL + '/booking-details/' + id)
        return successHandler(res)
    }
    catch (error) {
        return errorHandler(error)
    }
}

const deleteBooking = async (id) => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.delete(BASE_URL + '/booking-details/' + id)
        return successHandler(res)
    }
    catch (error) {
        return errorHandler(error)
    }
}

const addReviewBooking = async (id) => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.post(BASE_URL + '/booking-details/' + id + '/reviews')
        return successHandler(res)
    }
    catch (error) {
        return errorHandler(error)
    }
}

const updateStatusBooking = async (id) => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.put(BASE_URL + '/booking-details/' + id + '/status')
        return successHandler(res)
    }
    catch (error) {
        return errorHandler(error)
    }
}

const updatePaymentBooking = async (id) => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.put(BASE_URL + '/booking-details/' + id + '/payment')
        return successHandler(res)
    }
    catch (error) {
        return errorHandler(error)
    }
}

export { getBooking, addBooking, getBookingID, updateBooking, checkPitchBooking, getDetailBooking, deleteBooking, addReviewBooking, updateStatusBooking, updatePaymentBooking}
