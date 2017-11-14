import * as types from './actionTypes';

// akcija za azuriranje odgovora
export function updateAnswerSuccess(answer) {
    return {
        type: types.UPDATE_ANSWER_SUCCESS, answer
    };
}