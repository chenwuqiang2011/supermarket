import * as constants from '../../utils/commonConstant'

export function addUser(name, password, access, _user){

    return {
        types: [constants.ADD_REQUEST, constants.ADD_SUCCESS, constants.ADD_FAILURE],
        path: 'addUser',
        name: 'add',
        method: 'post',
        query: {name, password, access, _user}

    }
};

export function updateUser(id, name, password, access, _user){

    return {
        types: [constants.ADD_REQUEST, constants.ADD_SUCCESS, constants.ADD_FAILURE],
        path: 'updateUser',
        name: 'add',
        method: 'post',
        query: {id, name, password, access, _user}

    }
};

export function allUser(pageNo, qty){

    return {
        types: [constants.ADD_REQUEST, constants.ADD_SUCCESS, constants.ADD_FAILURE],
        path: 'allUser',
        name: 'add',
        method: 'post',
        query: {pageNo, qty}
    }
};
export function deleteUser(id, pageNo){

    return {
        types: [constants.ADD_REQUEST, constants.ADD_SUCCESS, constants.ADD_FAILURE],
        path: 'deleteUser',
        name: 'add',
        method: 'post',
        query: {id, pageNo}
    }
};


export function upDate(name){
	return {
		type:"updateUsername",
		name: "add",
		data: name
	}
}
