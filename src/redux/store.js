import { createStore } from "redux"
import reducer from "./reducer/reducer"

// store를 바꿀 수 있는 애는 reducer다
// store가 reducer 데려옴
let store = createStore(reducer);


export default store;