import * as constants from './shouyinConstants';

export default function(state = {loading: false}, action){
    let reState = JSON.parse(JSON.stringify(state));
    console.log(333,state,action);
    switch(action.type){
        case constants.cashierREQUEST:
            reState.loading = true
            break
        case constants.cashierSUCCESS:
        	/*var data = [];*/
        	reState.data = action.response
        	/*console.log(reState.data);
        	if(reState.data == ''){
        		console.log(999);
        		reState.data = action.response
        	}else{
        		if(reState.data.indexOf(action.response[0]) ==-1){
        			reState.data.qty++;
        		}else{
        			reState.data = action.response
        		}
        		console.log(9999);
        	}
            console.log(reState.data)*/
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