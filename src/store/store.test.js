import store from './store';

it('new rep should be added', () => {
  const action = { type: 'ADD_REP', payload: {} };
  store.dispatch(action);
  expect(store.getState().list.length).toBe(1);
});

it('rep should be deleted', () => {
  const action = { type: 'DEL_REP', payload: 0 };
  store.dispatch(action);
  expect(store.getState().list.length).toBe(0);
});

it('new ', () => {
  const action = { type: 'SEARCH', payload: 1 };
  store.dispatch(action);
  expect(store.getState().search).toBe(1);
});
