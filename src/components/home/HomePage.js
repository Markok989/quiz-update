import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>
                    React Quiz
                </h1>
                <br />
                <h3>
                    Play Quiz to test your knowledge!
                </h3>
                <br />
                {
                    /*
                    Link je deo react-router biblioteke i sluzi za navodjenje, 
                    tacnije da sluzi kao link
                    */
                }
                <Link to="quizzes" className="btn btn-primary btn-lg">Play Quiz</Link>
            </div>
        );
    }
}

export default HomePage;