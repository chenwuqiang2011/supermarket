import * as constants from '../../../src/utils/commonConstant'

export function supplier(qty){
    return {
        types: [constants.SUPPLIER_REQUEST, constants.SUPPLIER_SUCCESS, constants.SUPPLIER_FAILURE],
        path: 'getSupplier',
        method: 'post',
        query:qty
    }
}

export function searchsupplier(search){
    return {
        types: [constants.SUPPLIER_REQUEST, constants.SUPPLIER_SUCCESS, constants.SUPPLIER_FAILURE],
        path: 'SearchSuppliers',
        method: 'get',
        query:{key:search}
    }
}

export function deletesupplier(page,qty,id) {
    return {
        types:[constants.SUPPLIER_REQUEST,constants.SUPPLIER_SUCCESS, constants.SUPPLIER_FAILURE],
        path:'deleteSupplier',
        method:'post',
        query:{page:page,qty:qty,id:id}
    }
}

export function editBox(data){
    return {
        type: data.type,
        types: [constants.SUPPLIER_REQUEST, constants.SUPPLIER_SUCCESS, constants.SUPPLIER_FAILURE],
        payload: {status: data.status, editData: data.editData}
    }
}

export function update(data){
    console.log('1111',data)
    return {
        types: [constants.SUPPLIER_REQUEST, constants.SUPPLIER_SUCCESS, constants.SUPPLIER_FAILURE],
        path: 'updateSupplier',
        method: 'post',
        query: data
    }
}