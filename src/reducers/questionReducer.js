import * as type from '../actions/actionTypes';
import initialState from './initialState';

/*
reducer za pitanja(questionReducer),
state se dodeljuje vrednost iz initialState.questions, i akcija koja se primenjuje,
preko switch se definisu slucajevi (case) koji se koriste u reduceru,
    case UPDATE_QUESTION_SUCCESS sluzi da azurira vrednosti pitanja(question-a);
    preko spread operatora se prolazi kroz vrednosti state i filrira se,
    gleda se da question.id nije jednak sa action.question.id
    kreira se novi klon objekra koji ima vrednost action.question

*/
export default function questionReducer(state = initialState.questions, action) {
    switch (action.type) {
        case type.UPDATE_QUESTION_SUCCESS:
            return [
                ...state.filter(question => question.id !== action.question.id),
                Object.assign({}, action.question)
            ];

        default: return state;
    }
}