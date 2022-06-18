import axios from 'axios'
import { BASE_URL } from '../../../config/serverApiConfig'
import setHeaderToken from '../../../helpers/setHeaderToken'
import { token } from './../auth'
import successHandler from '../../../request/successHandler'
import errorHandler from '../../../request/errorHandler'

const getPitches = async () => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.get(BASE_URL + '/pitches')
        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}

const addPitches = async () => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.post(BASE_URL + '/pitches')
        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}

const getPitchesId = async (id) => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.get(BASE_URL + '/pitches/' + id)
        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}

const updatePitches = async (id) => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.put(BASE_URL + '/pitches/' + id)
        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}

const deletePitches = async (id) => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.delete(BASE_URL + '/pitches/' + id)
        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}

export {getPitches, addPitches, getPitchesId, updatePitches, deletePitches}