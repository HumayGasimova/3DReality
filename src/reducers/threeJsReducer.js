/**
* Constants
*/

import * as actionTypes from "../constants/actionTypes";

/**
* Initial State
*/

export const initialState = {
}

// const toggleMenuButton = (state) => {
//     return {
//         ...state,
//         menuButtonIsPressed: !state.menuButtonIsPressed,
//         sidebarOnInit: true
//     };
// }

const threeJsReducer = (state = initialState, action) => {
    switch(action.type){
        // case actionTypes.TOGGLE_MENU_BUTTON:
        //     return toggleMenuButton(state, action);
        default: 
            return state;
    }
}

export default threeJsReducer;
