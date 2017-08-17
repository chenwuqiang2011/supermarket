import * as constants from '../../../src/utils/commonConstant'

export function searchProduct(search){
    return {
        types: [constants.SEARCHPRODUCT_REQUEST, constants.SEARCHPRODUCT_SUCCESS, constants.SEARCHPRODUCT_FAILURE],
        path: 'getSearchProducts',
        method: 'post',
        query:{key:search}
    }
}