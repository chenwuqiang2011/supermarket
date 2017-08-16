import * as constants from '../../utils/commonConstant';

export function cashier(barCode){
	return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'collectMoney',
        method: 'post',
        query: {barCode}
    }
}

export function pointer(content,price){
	return {
		types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
		path: 'http://10.3.134.78:81/print',
		method: 'post',
		query:{content,price}
	}
}
