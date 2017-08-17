import * as constants from '../../../src/utils/commonConstant'

export function searchProduct(search){
    return {
        types: [constants.SEARCHPRODUCT_REQUEST, constants.SEARCH_SUCCESS, constants.SEARCH_FAILURE],
        path: 'getSearchProducts',
        method: 'post',
        query:{key:search}
    }
}