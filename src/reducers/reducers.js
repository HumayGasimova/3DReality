import { 
    combineReducers 
} from 'redux';
import {
     connectRouter 
} from 'connected-react-router';

import threeJsReducer from './threeJsReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    cube: threeJsReducer
});
