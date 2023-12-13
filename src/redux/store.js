import { createStore, combineReducers} from "redux";
import productReducer from "./reducers/productReducer"; 
import basketReducer from "./reducers/basketReducer";
import { thunk } from "redux-thunk";
import { applyMiddleware } from "redux";


//reducerlerı bilrleştirme

const rootReducer = combineReducers({basketReducer,productReducer })

//storu olusturma

export default createStore(rootReducer,applyMiddleware(thunk));


