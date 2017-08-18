import * as types from '../../utils/commonConstant'
export default function(state = {status: false}, action){
    let reState = JSON.parse(JSON.stringify(state))
        switch(action.type){
            case 'close':
                reState.lastFetched = action.lastFetched
                reState.status = false
                break
            case 'open':
                reState.lastFetched = action.lastFetched
                reState.status = true
                reState.editData = action.payload.editData
                break
        }
        return reState;
}