import {createStore} from "redux";
import selectReducer from "./reducers/selectReducer"
const store = createStore(selectReducer);
export default store;