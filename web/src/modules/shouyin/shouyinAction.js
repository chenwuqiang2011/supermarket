import * as constants from './shouyinConstants';

export function cashier(barCode){
	return {
        types: [constants.cashierREQUEST, constants.cashierSUCCESS, constants.cashierFAILURE],
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
		query:{text:''}
	}
}
