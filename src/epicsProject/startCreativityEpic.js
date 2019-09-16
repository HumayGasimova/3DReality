import { Observable } from 'rxjs';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/take';
import * as actionTypes from '../constants/actionTypes';
import * as Actions from '../actions';
import * as projectsToAdd from '../constants/projectsToAdd';

function startCreativityEpic(action$) { 
    return action$
        .ofType(actionTypes.START_CREATIVITY_COUNTER)
        .take(1)
        .mergeMap(action => {
            return Observable.of(
              Actions.addProject(projectsToAdd.Creativity)
            ) 
        })
}

export default startCreativityEpic;
