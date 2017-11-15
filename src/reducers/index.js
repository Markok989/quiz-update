import { combineReducers } from 'redux';
import answers from './answerReducer';
import questions from './questionReducer';
import quizzes from './quizReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import courses from './coursesReducer';

// komponenta za glavni reducer, u ovu komponentu se ubacuju svi reduceri koji su kreirani u app
const rootReducer = combineReducers({
  answers,
  questions,
  quizzes,
  ajaxCallsInProgress,
  courses
});

export default rootReducer;
