import {LOAD_CAMPERS, ORDER_STATUS} from './actions';
import {combineReducers} from 'redux';

function order(state, action) {
  switch (action.type) {
    case ORDER_STATUS:
      return action.order;
    default:
      if(state === undefined)
        return 'RECENT';
      else
        return state;
  }
}

function campers(state, action) {
  switch (action.type) {
    case LOAD_CAMPERS:
      return action.campers;
    default:
      if(state === undefined)
        return []
      else
        return state;
  }
}

const appState = combineReducers({
  order,
  campers
});

export default appState;