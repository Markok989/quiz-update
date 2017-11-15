import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import { Link } from 'react-router';

import QuestionQuiz from './QuestionQuiz';


class Quiz extends React.Component {
    // konstruktor sa property
    constructor(props) {
        super(props);

        // pocetni state za ovu komponentu
        this.state = {
            index: 0,
            answers: []
        };
    }

    // handler za submit odgovora,
    // uslov ako je state.index manji od duzine pitanja primenjuje se sledece,
    // state dobija novu vrednost 'index': this.state.index + 1,

    handleSubmit() {
        if (this.state.index < this.props.quiz.questions.length) {
            this.setState({
                'index': this.state.index + 1
            });
            // u suprotnom score dobija vrednost pocetne vrednosti state ili nuka(0),
            // zatim se ceslja kroz odgvore preko .map,
            // score dobija novu vrednost, score plus(sabira) sa vrednosu tretnutnog
            // odgovora(odgovor koji se nalazi u trenutnom pitanju) koji ima vrednost true,
            // state dobija novu vrednost 'score': score
        } else {
            let score = this.state.score || 0;
            this.state.answers.map((answer, i) => (
                score = score + this.props.quiz.questions[i].answers[answer].isTrue
            ));
            this.setState(
                {
                    'score': score
                }
            );
        }
    }

    // handler za slektovanje odgovora, ima atribut event
    // zatim izvlaci odgocore iz niza i preko slice izlvaci index,
    // parseInt omogucava konverziju stringa u intiger(broj), uzima vrednost iz event.target.value,
    // nakon toga opet izvlaci odgvore, preko slica izvlaci index i dodaje 1, 1 se dodaje iz razloga sto se u js numeracija gleda
    // od 0,1,2,3 , dodavanjem jedinice dobija se broj koji je potreban za prikaz,
    // answer ima novi state
    handleAnswerSelected(event) {
        let list = [
            ...this.state.answers.slice(0, this.state.index),
            parseInt(event.target.value),
            ...this.state.answers.slice(this.state.index + 1)
        ];
        this.setState({ 'answers': list });
    }

    /*
    index, answers je definisano kao state komponente,
    quiz je definisan kao props komponente,
    element complited:
        quiz.questioms i ako je index striktno jednak duzini/ broj pitanja gleda se true i false vrednost,
    numberOfQuestions: dodeljenjuje se broj pitanja,
    socre je definisan na nulu,
    
    uslof ako je zavrsen kviz:
        proalzi se kroz odgovore preko map sa parametrima answer i "i",
        i score ima vrednost:
            score + vrednost odredjenog odgovora (true=1/false=0) koji je u odrdjenom pitanju
    */
    render() {
        const { index, answers } = this.state;
        const { quiz } = this.props;
        let completed = (quiz.questions && (index === quiz.questions.length)) ? true : false;
        let numberOfQuestions = quiz.questions ? quiz.questions.length : 0;
        let score = 0;
        if (completed) {
            this.state.answers.map((answer, i) => (
                score = score + (this.props.quiz.questions[i].answers[answer].isTrue ? 1 : 0)
            ));
        }

        return (
            <div>
                <Panel header={quiz.title}>
                    {
                        /*
                        u slucaju da je kviz zavrsen prikazuje se vrednost prvog div-a:
                             <div>
                                <p>Congratulation, you finished the quiz</p>
                                Your score is {score}
                            </div>

                        u slucaju da kviz nije zavesen prikazuje se drugi div.

                            paragraf prikazuje index + 1(zbog numeracije od nule ) i broj pitanja,
                            zatim pitanja i indeks ako je manji od broja pitanja ,
                                prvo se prikazuje komponenta QuestionQuiz sa aributima,
                                    key: za srotiranje elmeenata,
                                    quiz: sadrzaj kviza,
                                    question: pitanje odredjenog indeksa,
                                    index: indeks,
                                    onAnswerSelected: primenjuje se metoda onAnswerSelected,
                                    onSubmit: primenjuje se metoda onSubmit,
                                u slucaju da ne ispunjava uslov prikazuje se prazan string/ nema pitanja i odgovra
                        */
                    }
                    {
                        completed ?
                            <div>
                                <p>Congratulation, you finished the quiz</p>
                                Your score is {score}
                                <br />
                                <br />
                                <br />
                                <Link to="quizzes" className="btn btn-primary btn-lg">Play Next Quiz</Link>
                            </div>
                            :
                            <div>
                                <p>Question {index + 1} of {numberOfQuestions}</p>
                                {quiz.questions && index < numberOfQuestions ?
                                    <QuestionQuiz
                                        key={quiz.id}
                                        quiz={quiz}
                                        question={quiz.questions[index]}
                                        index={index}
                                        onAnswerSelected={(event) =>
                                            this.handleAnswerSelected(event)}
                                        onSubmit={() => this.handleSubmit()}
                                    />
                                    : ''}
                            </div>
                    }
                </Panel>
            </div>
        );
    }
}


// funkcija getCourseById sa elementima (quizzes i id),
// quiz sadrzi quizzes koji je filtriran(gleda se da quiz.id bude jednak sa id)
// ako quiz vrati quiz[0] , da se ne bi javljala greska vraca se null
function getCourseById(quizzes, id) {
    const quiz = quizzes.filter(quiz => quiz.id == id);
    if (quiz) return quiz[0]; //since filter returns an array, have to grab the first.
    return null;
}


// funkcija mapStateToProps sluzi da spoji redux sa komponentom,
// const quizId = ownProps.params.id; sluzi da omoguci putanju za `/course/:id`
// quiz ima elemente id title i length koji imaju vrednost prazan string,
// uslov, ako su quizId i duzina niza veci od nule(0)
// quiz prikazuje getCourseById sa elementima state.quizzes, quizId,
// na kraju se vraca quiz sa sadrzajem quiz
function mapStateToProps(state, ownProps) {
    const quizId = ownProps.params.id; // from the path `/course/:id`

    let quiz = { id: '', title: '', length: '' };

    if (quizId && state.quizzes.length > 0) {
        quiz = getCourseById(state.quizzes, quizId);
    }

    return {
        quiz: quiz
    };
}

// connect za povezivanje funkcije mapStateToProps sa komponentom,
// null se pise je je izostavljena funkcija mapDispatchToProps
export default connect(mapStateToProps, null)(Quiz);
