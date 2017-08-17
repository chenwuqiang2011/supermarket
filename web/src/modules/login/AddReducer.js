//处理 ajax 返回数据和一些状态管理
//发起 ajax 请求前 => show up loading
//ajax 完成之后 => loading hided $.get('url', function(response){})  => {status: true, data: [{}]}
// action => store = createStroe(reducer, 中间件) => reducer

import * as types from '../../utils/commonConstant'

export default function(state = {loading: false,name: null,data:{data:[]}}, action){
    let reState = JSON.parse(JSON.stringify(state));

    
    switch(action.type){
        case types.REQUEST:
            reState.loading = true
            break
        case types.SUCCESS:
            reState.data = action.response[0]
            
            reState.lastFetched = action.lastFetched
            reState.loading = false
            break
        case types.FAILURE:
            reState.error = action.error
            reState.loading = false
            break 
        case "updateUsername":
            console.log(action.data)
            reState.name = action.data
            reState.loading = false
            break 
        case "allUser":
            console.log(action.data)
            reState.user = action.response[0]
            reState.loading = false
            break
        case "aa":
            console.log(action.data)
            reState.allUser = action.response[0]
            reState.user = action.response[0]
            reState.loading = false
            break
    }
    return reState;
}