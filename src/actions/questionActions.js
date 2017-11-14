import * as types from './actionTypes';


// akcija koja se koristi za azuriranje pitanja
export function updateQuestionSuccess(question) {
    return {
        type: types.UPDATE_QUESTION_SUCCESS, question
    };
}
