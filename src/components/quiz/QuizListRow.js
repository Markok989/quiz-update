import React, { PropTypes } from 'react';
import { Link } from 'react-router';


const QuizListRow = ({ quiz }) => {

    return (
        <tr>
            {
                /*
                &nbsp; oznacava prazan red
                */
            }
            <td>&nbsp;</td>
            {
                /*
                Link omogucava da od elementa napravi link i dodeli mu putanju,
                u ovom slucaju kada iskoristi linik kreira se u url putanja
                /quizzes/ + quiz.id
                prikazuje se naslov kviza quiz.title
                */
            }
            <td><Link to={'/quizzes/' + quiz.id}>{quiz.title}</Link></td>
            {
                /*
                prikaz broj/duzina pitanja
                */
            }
            <td>{quiz.questions.length}</td>
        </tr>
    );
};

// provera za ilazne rezultate u komponentni
QuizListRow.propTypes = {
    quiz: PropTypes.object.isRequired
    //q: PropTypes.array.isRequired
};

export default QuizListRow;
