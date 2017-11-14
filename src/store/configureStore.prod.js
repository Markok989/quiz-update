import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

// kreiran Store koji sadrzi reducere, stanje i middleware koji koristi thunk biblioteku

/* thunk:
        omogucava da napisanu akciju vrati funkciju u mesto akcije, i prosledjuje akciju po zadatim uslovima
*/
export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}
