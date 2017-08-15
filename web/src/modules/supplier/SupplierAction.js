import * as constants from '../../../src/utils/commonConstant'

export function supplier(qty){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'getSupplier',
        method: 'post',
        query:qty
    }
}
