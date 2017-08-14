import * as constants from '../../redux/commonConstant'

export function products(qty){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'query',
        method: 'get',
        query: qty
    }
   
}
