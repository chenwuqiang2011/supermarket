import * as constants from '../../../src/utils/commonConstant'

export function addproduct(data){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'addProduct',
        method: 'post',
        query:data
    }
}


