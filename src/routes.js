import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import QuestionCreatePage from './components/questions/QuestionCreatePage';
import Quiz from './components/quiz/Quiz';
import QuizPage from './components/quiz/QuizPage';
import Courses from './components/courses/Courses';
import CoursePage from './components/coursePage/CoursePage';

// komponenta u kojoj su definisane sve rute u aplikaciji
export default (
    <Route path="/" component={App}>{/*app komponenta, parent*/}
        <IndexRoute components={HomePage} />{/*HomePage komponenta, child (pocetna strna)*/}
        <Route path="questions" component={QuestionCreatePage} />{/* QuestionCreatePage komponenta, child (strana za dodavanje kviza)*/}
        <Route path="quizzes" component={QuizPage} />{/* QuizPage komponenta, child (strana sa spiskom kvizova)*/}
        <Route path="quizzes/:id" component={Quiz} />{/* Componenta Quiz, quizzes + id je url za tu stranu, child, strana sa kvizom*/}
        <Route path="courses" component={Courses} />{/* Componenta Courses, prikazuje kurseve u app*/}
        <Route path="CoursePage" component={CoursePage} />{/* Componenta CoursePage, prikazuje kurs u app*/}
    </Route>
);
