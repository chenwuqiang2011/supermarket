//component.js

var DraftComponent = React.createClass({
    getInitialState: {
        item1: 0,
        item2: 0
    },
    addItem(event){
        // this.state.item1++;
        let index = event.target.index || parseInt(Math.random * 100)
        event.target.index = index
        action(index)
        this.props
    },
    render(){
        return (
            <div>
                <h2>{this.props.action}</h2>
                <h1>{this.state.item1++}</h1>
                <input type="button" value="click" onClick={this.addItem.bind(this)}/>
            </div>

        )
    }
})

//connect

//action.js
function action(index){
    return {
        type: 'add',
        index: index
    }
}

//reducer.js
function reducer(state, action){
    if(action.type == 'add'){
        state.item1 += 1;

        state['item' + action.index] += 1
        state.item2 += 2;
        return state;
    }
}

//store
var store = createStore(reducer, $.ajax)

store.item2
store.type
store.index

//action => reducer
//redux 封装实现调用 action

this.props.action() = store

//redux
var redux = function(){
    var obj = action();
    reducer(null, {type: '请求前'})
    $.get(path, query, function(reaponse){
        reducer(null, {type: '请求成功'})
    })
    // return reducer(null, obj)
}


//
<Privoder store={store}>
    <DraftComponent name="Tom"/>
</Privoder>
