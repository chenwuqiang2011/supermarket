import * as constants from '../../../src/utils/commonConstant'

export function supplier(){
    return {
        types: [constants.SUPPLIER_REQUEST, constants.SUPPLIER_SUCCESS, constants.SUPPLIER_FAILURE],
        path: 'getSupplier',
        method: 'post',
    }
}

export function searchsupplier(search){
    return {
        types: [constants.SUPPLIER_REQUEST, constants.SUPPLIER_SUCCESS, constants.SUPPLIER_FAILURE],
        path: 'SearchSuppliers',
        method: 'get',
        query:{key:search}
    }
}