// state가 뭐가 있는지 초기화 하면서 알려 줘야 함
let initialState = {
    count: 0,
    id:"",
    password:""
};

function reducer(state=initialState, action) {
    console.log(action);
    if (action.type === "INCREMENT") {
        // return 값으로 바꿔준다
        // reducer는 항상 return을 해줘야 한다
        return {...state, count:state.count + action.payload.num }
        // store는 객체의 주소가 새로운 객체가 오느냐 오지 않느냐만 따짐
        // ...state : count 제외 다른거 그대로 복사
    }
    
    if (action.type === "DECREMENT") {
        return {...state, count:state.count - 1 }
    }

    if (action.type === "LOGIN") {
        return {
            // count는 유지
            ...state, 
            id: action.payload.id,
            password: action.payload.password
        }
    }
    return {...state}
}

export default reducer;