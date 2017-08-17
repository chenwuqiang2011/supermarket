import * as constants from '../../utils/commonConstant'

export function login(username, password){

    return {
        types: [constants.POST_REQUEST, constants.POST_SUCCESS, constants.POST_FAILURE],
        path: 'login',
        method: 'post',
        query: {username, password}

    }
}