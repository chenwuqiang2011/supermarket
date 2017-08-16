import * as constants from '../../utils/commonConstant'

export function addUser(name, password,access){

    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'addUser',
        method: 'post',
        query: {name, password, access}

    }
};

export function allUser(name,password){

    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'allUser',
        method: 'post',
        data: ""
    }
};
export function deleteUser(id){

    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'deleteUser',
        method: 'post',
        query: {id}
    }
};


export function upDate(name){
	return {
		type:"updateUsername",
		data: name
	}
}
