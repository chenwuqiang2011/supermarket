import * as constants from '../../../src/utils/commonConstant'

export function supplier(qty){
    return {
        types: [constants.SUPPLIER_REQUEST, constants.SUPPLIER_SUCCESS, constants.SUPPLIER_FAILURE],
        path: 'getSupplier',
        method: 'post',
        query:qty
    }
}
