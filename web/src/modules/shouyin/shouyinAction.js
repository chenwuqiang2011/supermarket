import * as constants from '../../utils/commonConstant';

export function cashier(barCode){
	return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'query',
        method: 'post',
        query: {barCode}
    }
}