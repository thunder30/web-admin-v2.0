import axios from 'axios'
import { BASE_URL } from '../../../config/serverApiConfig'
import setHeaderToken from '../../../helpers/setHeaderToken'
import { token } from './../auth'
import successHandler from '../../../request/successHandler'
import errorHandler from '../../../request/errorHandler'

const getBranches = async () => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.get(BASE_URL + '/pitch-branches')
        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}

const addBranches = async () => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.post(BASE_URL + '/pitch-branches')
        return successHandler(res)
    } catch (error) {
        return errorHandler(error)
    }
}

const getBranchesID = async (id) => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.get(BASE_URL + '/pitch-branches/' + id)
        return successHandler(res)
    }
    catch (error) {
        return errorHandler(error)
    }
}

const updateBranches = async (id) => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.put(BASE_URL + '/pitch-branches/' + id)
        return successHandler(res)
    }
    catch (error) {
        return errorHandler(error)
    }
}

const deleteBranches = async (id) => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.delete(BASE_URL + '/pitch-branches/' + id)
        return successHandler(res)
    }
    catch (error) {
        return errorHandler(error)
    }
}

const getPitchesBranch = async (id) => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.get(BASE_URL + '/pitches-branches/' + id  + '/pitches/' )
        return successHandler(res)
    }
    catch (error) {
        return errorHandler(error)
    }
}

const getTransactionsBranch = async (id) => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.get(BASE_URL + '/pitches-branches/' + id  + '/transactions/' )
        return successHandler(res)
    }
    catch (error) {
        return errorHandler(error)
    }
}

const getBookingsBranch = async (id) => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.get(BASE_URL + '/pitches-branches/' + id  + '/bookings/' )
        return successHandler(res)
    }
    catch (error) {
        return errorHandler(error)
    }
}

const updatePriceBranch = async (id, pitchTypeId) => {
    const accessToken  = token.get()
    setHeaderToken(accessToken)
    try {
        const res = await axios.put(BASE_URL + '/pitches-branches/' + id  + `/pitch-types/${pitchTypeId}/prices` )
        return successHandler(res)
    }
    catch (error) {
        return errorHandler(error)
    }
}


export {getBranches, addBranches, getBranchesID, updateBranches, deleteBranches, getPitchesBranch, getTransactionsBranch, getBookingsBranch, updatePriceBranch}