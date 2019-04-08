const selectReducer = (state ={
    value: 'Choose an option'
    }
,action) => {
    switch(action.type){
        case "SELECT_CHANGE":
            state = {
                ...state,
                value:action.payload
            };
            break;
    }
    return state;
}
export default selectReducer;