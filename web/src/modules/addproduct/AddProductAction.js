import * as constants from '../../../src/utils/commonConstant'

export function addproduct(data){
    return {
        types: [constants.ADDPRODUCT_REQUEST, constants.ADDPRODUCT_SUCCESS, constants.ADDPRODUCT_FAILURE],
        path: 'addProduct',
        method: 'post',
        query:data
    }
}


