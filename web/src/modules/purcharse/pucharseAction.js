import * as constants from '../../utils/commonConstant'

export function pucharse(username, password){

    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'login',
        method: 'post',
        query: {username, password}
    }
    // return {
    // 	type: constants.REQUEST
    // }
}