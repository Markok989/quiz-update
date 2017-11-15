import React from 'react';
import { Panel, ButtonToolbar, ListGroup } from 'react-bootstrap';

const QuestionQuiz = ({ question, index, onAnswerSelected, onSubmit }) => {

    /*
    Panel element sadrzi header koji prikazuje pitanje i stil elmenta,

    ListGroup uredjuje listu po uredjenoj lisim

    ol lista sortira po abecedi,
    pristupa se odgovrima preko map sa paramertima answer i "i",
    U elementu Panel se prikazuje lista ,
    li koja sortira po key={`${index}-${i}`},

    unput element sa atributima:
        type: tip radio,
        name: question + index
                na mesto indexa se pise broj trenutnog pitanja,
        id: question + index_ answer + i
                na mesto indexa se pise broj trenutnog pitanja, na i se pse broj trenutnog odgovora,
        defaultChecked: da li je odgovor stikliran po defoltu, false znaci nije,
        onChange: primenjuje se metoda onAnswerSelected
    
    label prikazuje na isti nacin,
    {`question_${index}_answer_${i}`}- index broj pitanja, index broj odg

    button na klik primenjuje metodu onSubmit
        */
    return (
        <div>
            <Panel header={question.question} bsStyle="primary">
                <ListGroup componentClass="ul">
                    <ol type="a">
                        {question.answers.map((answer, i) =>
                            <Panel>
                                <li key={`${index}-${i}`}>
                                    <input
                                        type="radio"
                                        name={`question_${index}`}
                                        id={`question_${index}_answer_${i}`}
                                        defaultChecked={false}
                                        value={i}
                                        onChange={onAnswerSelected}
                                    />
                                    {' '}
                                    <label
                                        htmlFor={`question_${index}_answer_${i}`}>
                                        {answer.label}
                                    </label>
                                </li>
                            </Panel>
                        )}
                    </ol>
                </ListGroup>
            </Panel>
            <button className="btn btn-primary" onClick={onSubmit}>
                <h4>
                    Submit
                </h4>
            </button>
        </div>
    );
};

export default QuestionQuiz;
