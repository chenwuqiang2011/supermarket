//处理 ajax 返回数据和一些状态管理
//发起 ajax 请求前 => show up loading
//ajax 完成之后 => loading hided $.get('url', function(response){})  => {status: true, data: [{}]}
// action => store = createStroe(reducer, 中间件) => reducer

import * as types from '../../utils/commonConstant'


export default function(state = {loading: false,data:[],pageNo:1,total:1}, action){
    let reState = JSON.parse(JSON.stringify(state))
        /*console.log(999999,action);*/
    switch(action.type){
        case types.PRODUCT_REQUEST:
            reState.loading = true
            break
        case types.PRODUCT_SUCCESS:
            reState.data        = action.response.data
            reState.pageNo      = action.query.page
            reState.total       = action.response.total
            reState.lastFetched = action.lastFetched
            reState.loading     = false
            break
        case types.PRODUCT_FAILURE:
            reState.error   = action.error
            reState.loading = false
            break
    }
    return reState;
}

