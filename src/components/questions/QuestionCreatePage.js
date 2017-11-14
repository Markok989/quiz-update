import React, { PropTypes } from 'react';
import QuestionForm from './QuestionForm';

class QuestionCreatePage extends React.Component {

    // konstruktor komponente
    constructor(props) {
        super(props);

        // pocetni state kompoente
        this.state = {
            numQuestion: 0
        };
    }

    // poziva se komponenta QuestionForm
    render() {
        return (
            <div className="panel-body">
                <h1>Create Quiz</h1>
                <QuestionForm />
            </div>
        );
    }
}

export default QuestionCreatePage;