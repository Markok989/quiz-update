import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';


/*
index.js je komponenta koja sve objedinjuje, i prikazuje sadrzaj u elementu app koji je deo index.html
*/
render(
    <Provider>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
