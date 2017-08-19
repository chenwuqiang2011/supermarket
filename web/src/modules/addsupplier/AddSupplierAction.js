import * as constants from '../../../src/utils/commonConstant'

export function addSupplier(data){
    return {
        types: [constants.ADDSUPPLIER_REQUEST, constants.ADDSUPPLIER_SUCCESS, constants.ADDSUPPLIER_FAILURE],
        path: 'addSupplier',
        method: 'post',
        query:data
    }
}


