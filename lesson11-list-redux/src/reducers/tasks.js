import * as types from '../constants/ActionTypes'
var initialState = [];

var myReducer = (state = initialState, action) => {
    switch(action.type){
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            console.log(action)
        default: return state;
     }
    return state
}

export default myReducer;