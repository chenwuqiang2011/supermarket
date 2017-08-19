import * as constants from '../../../src/utils/commonConstant'

export function products(qty){
    return {
        types:[constants.PRODUCT_REQUEST,constants.PRODUCT_SUCCESS,constants.PRODUCT_FAILURE],
        path: 'getProduct',
        method: 'post',
        query:qty
    }
}

export function removeProduct(page,qty,id) {
	return {
		types:[constants.PRODUCT_REQUEST,constants.PRODUCT_SUCCESS, constants.PRODUCT_FAILURE],
		path:'deleteProduct',
		method:'post',
		query:{page:page,qty:qty,id:id}
	}
}

export function editBox(data){
    return {
        type: data.type,
        types: [constants.PRODUCT_REQUEST, constants.PRODUCT_SUCCESS, constants.PRODUCT_FAILURE],
        payload: {status: data.status, editData: data.editData}
    }
}

export function update(data){
    return {
        types: [constants.PRODUCT_REQUEST, constants.PRODUCT_SUCCESS, constants.PRODUCT_FAILURE],
        path: 'updateProduct',
        method: 'post',
        query: data
    }
}


