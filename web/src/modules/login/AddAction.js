import * as constants from '../../utils/commonConstant'

export function addUser(name, password, access, _user){

    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'addUser',
        name: 'add',
        method: 'post',
        query: {name, password, access, _user}

    }
};

export function updateUser(id, name, password, access, _user){

    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'updateUser',
        name: 'add',
        method: 'post',
        query: {id, name, password, access, _user}

    }
};

export function allUser(pageNo, qty){

    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'allUser',
        name: 'add',
        method: 'post',
        query: {pageNo, qty}
    }
};
export function deleteUser(id, pageNo){

    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
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
