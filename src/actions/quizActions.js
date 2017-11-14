import * as types from './actionTypes';
import quizApi from '../api/mockQuizApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

// akcija za ucitavanje kviza
export function loadQuizzesSuccess(quizzes) {
    return {
        type: types.LOAD_QUIZZES_SUCCESS, quizzes
    };
}

// akcija za kriranje kviza
export function createQuizSuccess(quiz) {
    return {
        type: types.CREATE_QUIZ_SUCCESS, quiz
    };
}

// akcija za azuriranje kviza
export function updateQuizSuccess(quiz) {
    return {
        type: types.UPDATE_QUIZ_SUCCESS, quiz
    };
}


/*
funkcija za loadQuiz,
vraca se f-ja i koristi se parametar dispatch,
    dispatch poziva beginAjaxCall koji je deo ajax akcije,
    zatim se vraca getAllQuizzes koji se nalazi u quizApi
        i preko dispatch se ucitava akcija loadQuizzesSuccess
*/
export function loadQuiz() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return quizApi.getAllQuizzes().then(quizzes => {
            dispatch(loadQuizzesSuccess(quizzes));
        }).catch(error => {
            throw (error);
        });
    };
}

/*
funkcija za saveQuiz,
vraca se funkcija sa parametrima dispatch i getState
    preko dispatch se poziva beginAjaxCall() koji je deo ajax akcijce,
    craca se saveQuiz koji je deo quizApi,
        i opet preko dispatch se poziva akcija createQuizSuccess,
na kraju se koristi catch za prikaz greske, ukoliko se javi greska
*/
export function saveQuiz(quiz) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return quizApi.saveQuiz(quiz).then(quiz => {
            dispatch(createQuizSuccess(quiz));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw (error);
        });
    };
}
