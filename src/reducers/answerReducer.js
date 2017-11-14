import * as type from '../actions/actionTypes';
import initialState from './initialState';

/*
reducer za odgovore(answerReducer),
state se dodeljuje vrednost iz initialState.answers, i akcija koja se primenjuje
preko switch se definisu slucajevi (case) koji se koriste u reduceru,
    case UPDATE_ANSWER_SUCCESS sluzi da azurira vrednosti odgovora(answer-a);
    preko spread operatora se prolazi kroz vrednosti state i filrira se,
    gleda se da answer.id nije jednak sa action.answer.id
    kreira se novi klon objekra koji ima vrednost action.answer

vraca se state sa novim vrednostima
*/
export default function answerReducer(state = initialState.answers, action) {
    switch (action.type) {
        case type.UPDATE_ANSWER_SUCCESS:
            return [
                ...state.filter((answer) => answer.id !== action.answer.id),
                Object.assign({}, action.answer)
            ];

        default: return state;
    }
}