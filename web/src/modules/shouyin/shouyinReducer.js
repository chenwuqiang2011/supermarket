import * as types from '../../utils/commonConstant'

export default function(state = {loading: false}, action){
    let reState = JSON.parse(JSON.stringify(state));
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
    }
    return reState;
}