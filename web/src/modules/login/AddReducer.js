//处理 ajax 返回数据和一些状态管理
//发起 ajax 请求前 => show up loading
//ajax 完成之后 => loading hided $.get('url', function(response){})  => {status: true, data: [{}]}
// action => store = createStroe(reducer, 中间件) => reducer

import * as types from '../../utils/commonConstant'

export default function(state = {loading: false,name: null,data:[]}, action){
    let reState = JSON.parse(JSON.stringify(state));

        switch(action.type){
            case types.ADD_REQUEST:
                reState.loading = true
                break
            case types.ADD_SUCCESS:
                reState.data = action.response.data;
                reState.total = action.response.total;
                reState.pageNo = action.response.pageNo;
                console.log("ADD",action.response)
                reState.lastFetched = action.lastFetched
                reState.loading = false
                break
            case types.ADD_FAILURE:
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
        }
    return reState;
}