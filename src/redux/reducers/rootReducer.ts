import { combineReducers } from 'redux';
import userReducer from './userReducer';
import UIReducer from './UIReducter';

const rootReducer = combineReducers({
    user: userReducer,
    UI: UIReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;
