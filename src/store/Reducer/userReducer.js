const INITAL_VALUE = {
    user:{},
    isAuth:false
}

const userReducer =  (state = INITAL_VALUE, action) => {
    if(action.type=='REGISTER'){
        return state
    }
    return state
};


export default userReducer