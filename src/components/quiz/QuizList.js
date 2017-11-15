import React, { PropTypes } from 'react';
import QuizListRow from './QuizListRow';
import { Table } from 'react-bootstrap';

const QuizList = ({ quizzes }) => {
    return (
        <Table responsive>
            <table className="table">
                <thead>
                    <tr>
                        {
                            /*
                            &nbsp; oznacava prazan red
                            */
                        }
                        <th>&nbsp;</th>
                        <th>Title</th>
                        <th>Number of questions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        /*
                        quizzes.map prolazi kroz komponenutu preko parametra quiz,
                        key sluzi se gleda prema cemu da se sortira, quiz je sadrzaj
                        */
                    }
                    {quizzes.map((quiz) =>
                        <QuizListRow key={quiz.id} quiz={quiz} />
                    )}
                </tbody>
            </table>
        </Table>
    );
};

// provera za izlazne vrednosti u komponenti
QuizList.propTypes = {
    quizzes: PropTypes.array.isRequired
};

export default QuizList;

