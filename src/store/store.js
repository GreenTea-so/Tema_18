import { createStore } from 'redux';

function repList(state = { search: [], list: [] }, action) {
  const newState = state;
  if (action.type === 'ADD_REP') {
    newState.list.push(action.payload);
  }
  if (action.type === 'DEL_REP') {
    newState.list.splice(action.payload, 1);
  }
  if (action.type === 'SEARCH') {
    newState.search = action.payload;
    console.log(newState.search);
  }

  return newState;
}

const store = createStore(repList);

export default store;
