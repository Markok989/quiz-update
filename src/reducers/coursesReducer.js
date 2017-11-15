import * as types from '../actions/actionTypes';
import initialState from './initialState';

// reducer za coursesReducer-s, uzima stanje i akciju, vraca novo stanje
export default function coursesReducer(state = initialState.courses, action) {
    switch (action.type) {

        // prvi slucaj je za ucitavanje kureva,
        // samo se poziva action.courses
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;

        // drugi slucaj je sa kreiranje kurseva
        // prolazi kroz sve vrednosti state, kreira klon koji sadrzi action.course
        case types.CREATE_COURSE_SUCCESS:
            return [...state, Object.assign({}, action.course)];

        // treci slucaj je za azuriranje kurseva,
        // prolazi kroz sadrzaj state i filtrira preko parametra course, gleda se da course.id nje jednak action.course.id
        // kreora se klon objekta sa action.course
        case types.UPDATE_COURSE_SUCCESS:
            return [...state.filter((course) => course.id !== action.course.id),
            Object.assign({}, action.course)];

        // vraca se state
        default:
            return state;
    }
}