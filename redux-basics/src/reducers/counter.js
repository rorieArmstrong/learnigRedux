const counterReducer = (state = 0, action) => {
    switch(action.type){
        case 'increment':
            return state++;
        case 'decrement':
            return state--;
    }
}
export default counterReducer;