import axios from 'axios'


const USER_API_BASE_URL = 'http://localhost:8080/eas/user'

class  UserService
 {
    loginUser(userCredentials) {
        return axios.post(USER_API_BASE_URL + '/login', userCredentials)
    } 

    getUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId)
    }

    createAccount(user) {
        return axios.post(USER_API_BASE_URL, user)
    }

    getAllUser() {
        return axios.get(USER_API_BASE_URL)
    }
}

export default new UserService()