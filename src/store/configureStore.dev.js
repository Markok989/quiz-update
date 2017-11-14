import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// kreiran Store koji sadrzi reducere, stanje i middleware koji koristi thunk biblioteku
/* thunk:
        prosledjuje akcije
*/

/*
reduxImmutableStateInvariant sluzi za stata koji je ne promenljiv
*/
export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk, reduxImmutableStateInvariant()))
    );
}
