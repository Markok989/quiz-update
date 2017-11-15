import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import configureStore from './store/configureStore';
import { loadQuiz } from './actions/quizActions';
import { loadCourses } from './actions/coursesActions';

// konfiguracija Store, ucitava potrebme akcije
const store = configureStore();

// ucitavanje loadQuiz-a u store
store.dispatch(loadQuiz());

// ucitavanje loadCourses-a u store
store.dispatch(loadCourses());


/*
index.js je komponenta koja sve objedinjuje, i prikazuje sadrzaj u elementu app koji je deo index.html
*/
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);