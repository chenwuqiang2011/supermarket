import * as constants from '../../utils/commonConstant'

export function addUser(data){

    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'addUser',
        method: 'post',
        query: {data}

    }
};
export function update(data){
	return {
		type:"updateUsername",
		query: {data}
	}
}
