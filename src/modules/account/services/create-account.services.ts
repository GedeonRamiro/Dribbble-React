import api from '_common/services/api'

const BASE_PATH_USERS = '/users'
const BASE_PATH_LOGIN = '/login'

const postUsers = ( user: {} ) => {
    return api.post(BASE_PATH_USERS, user)
}

const postLogin = ( user: {} ) => {
    return api.post( BASE_PATH_LOGIN, user)
}


const createAccountService = { postUsers, postLogin }

export default createAccountService