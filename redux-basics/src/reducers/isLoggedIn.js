const loggedReducer = (state = false, action) => {
    switch(action.type){
        case 'sign_in':
            return !state;
        case 'default':
            return false;
    }
}
export default loggedReducer;