import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider} from 'react-redux'
import { createStore} from 'redux'


function repList(state = [], action){
    if (action.type === 'ADD_REP') {
        state.push(action.payload)
    }
    if (action.type === 'DEL_REP') {
        state.splice(action.payload,1)
    }
    
    return state;
}

const store = createStore(repList)

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

