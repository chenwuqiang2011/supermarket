//处理 ajax 返回数据和一些状态管理
//发起 ajax 请求前 => show up loading
//ajax 完成之后 => loading hided $.get('url', function(response){})  => {status: true, data: [{}]}
// action => store = createStroe(reducer, 中间件) => reducer

import * as types from '../../utils/commonConstant'

export default function(state = {loading: false,name:null,logout:"登录",data:{data:[]}}, action){
    let reState = JSON.parse(JSON.stringify(state))
    /*console.log("action",action.resonse)*/
    switch(action.type){
        case types.REQUEST:
            reState.loading = true
            break
        case types.SUCCESS:

            reState.data = action.response
            reState.lastFetched = action.lastFetched
            reState.loading = false
            break
        case types.FAILURE:
            reState.error = action.error
            reState.loading = false
            break
        case 'username':
            reState.name = action.data
            reState.logout = "退出"
            break
        case 'signout':
            reState.name = null
            reState.logout = "登录"
            break
    }
    return reState;
}