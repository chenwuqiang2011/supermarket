import * as constants from '../../../src/utils/commonConstant'

export function products(qty){
    return {
        types: [constants.PRODUCT_REQUEST, constants.PRODUCT_SUCCESS, constants.PRODUCT_FAILURE],
        path: 'getProduct',
        method: 'post',
        query:qty
    }
};

export function removeProduct(id) {
	return {
		types:[constants.PRODUCT_REQUEST,constants.PRODUCT_SUCCESS, constants.PRODUCT_FAILURE],
		path:'deleteProduct',
		method:'post',
		query:{id}
	}
}


