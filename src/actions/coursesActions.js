import * as types from './actionTypes';
import coursesApi from '../api/mockCoursesApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

// akcija za ucitavanje kureva
export function loadCoursesSuccess(courses) {
    return {
        type: types.LOAD_COURSES_SUCCESS, courses
    };
}

// akcija za kreiranje kurseva
export function createCoursesSuccess(course) {
    return {
        type: types.CREATE_COURSE_SUCCESS, course
    };
}

// akcija za azuriranje kurseva
export function updateCoursesSuccess(course) {
    return {
        type: types.UPDATE_COURSE_SUCCESS, course
    };
}

// funkcija za ucitavanje kueseva,
// preko dispatch se poziva beginAjaxCall,
// zatim se pristupa getAllCourses koji se nalazi u coueseApi, zatim se preko then
// (ukoliko nema greske nastavlja se dalje, ako ima greske prekida se preko reject)
// pristupa loadCoursesSuccess ako nema greske, ako se javi greska ispisuje je i ne prikazuje sadrzaj
export function loadCourses() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return coursesApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw (error);
        });
    };
}