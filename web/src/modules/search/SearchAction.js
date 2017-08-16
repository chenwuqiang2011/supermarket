import * as constants from '../../../src/utils/commonConstant'

export function searchProduct(search){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'getSearchProducts',
        method: 'post',
        query:{key:search}
    }
}