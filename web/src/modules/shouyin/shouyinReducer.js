import * as constants from './shouyinConstants';

export default function(state = {loading: false}, action){
    let reState = JSON.parse(JSON.stringify(state));
    console.log(333,state,action);
    switch(action.type){
        case constants.cashierREQUEST:
            reState.loading = true
            break
        case constants.cashierSUCCESS:
            reState.data = action.response
            console.log(reState.data)
            reState.lastFetched = action.lastFetched
            reState.loading = false
            break
        case constants.cashierFAILURE:
            reState.error = action.error
            reState.loading = false
            break
    }
    return reState;
}