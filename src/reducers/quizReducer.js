import * as type from '../actions/actionTypes';
import initialState from './initialState';

// reducer za quiz
export default function quizReducer(state = initialState.quizzes, action) {

    /*
    u quiz reduceru ima 3 slucaja za koriscenje kacija
    */
    switch (action.type) {

        // prvi slucaj za ucitavanje kviza i tu se samo vraca vrednost action.quizzes
        case type.LOAD_QUIZZES_SUCCESS: return action.quizzes;

        // drugi lsucaj se sa kriranje kviza, tu se prolazi kroz vrednosti state,
        // kreira klon objekta koji sadrzi action.quiz
        case type.CREATE_QUIZ_SUCCESS: return [
            ...state, Object.assign({}, action.quiz)
        ];

        // treci slucaj je za azuriranje kviza,
        // prolazi se kroz vrednosti state i filtira se,
        // gleda se da quiz.id me bude jednak action.quiz.id,
        // kreira se klon objekta koji ima vrednost action.quiz
        case type.UPDATE_QUIZ_SUCCESS: return [
            ...state.filter((quiz) => quiz.id !== action.quiz.id),
            Object.assign({}, action.quiz)
        ];

        // vraca se state
        default: return state;
    }
}    