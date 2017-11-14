import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';

// komponenta u kojoj su definisane sve rute u aplikaciji
export default (
    <Route path="/" component={App}>{/*app komponenta, parent*/}
        <IndexRoute components={HomePage} />{/*HomePage komponenta, child (pocetna strna)*/}
    </Route>
);
