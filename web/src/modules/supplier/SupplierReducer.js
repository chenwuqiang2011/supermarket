//处理 ajax 返回数据和一些状态管理
//发起 ajax 请求前 => show up loading
//ajax 完成之后 => loading hided $.get('url', function(response){})  => {status: true, data: [{}]}
// action => store = createStroe(reducer, 中间件) => reducer

import * as types from '../../utils/commonConstant'

export default function(state = {loading: false,data:[],total:1,pageNo:1}, action){
    let reState = JSON.parse(JSON.stringify(state))
   
    switch(action.type){
        case types.SUPPLIER_REQUEST:
            reState.loading = true
            break
        case types.SUPPLIER_SUCCESS:
            reState.data        = action.response.data
            reState.total       = action.response.total
            reState.pageNo      = action.response.page
            reState.lastFetched = action.lastFetched
            reState.loading     = false
            break
        case types.SUPPLIER_FAILURE:
            reState.error = action.error
            reState.loading = false
            break
    }
    return reState;
}