import { UIActions } from "../actions/UIActions";
import { Reducer } from "redux";

type UIState = {
    isTextareaFocused: boolean;
}

const initialState: UIState = {
    isTextareaFocused: false,
}

const UIReducer: Reducer<UIState, UIActions> = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TEXTAREA_FOCUS':
            return {
                ...state,
                isTextareaFocused: action.payload,
            }
        default:
            return state;
    }
}

export default UIReducer;
