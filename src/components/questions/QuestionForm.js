import React, { PropTypes } from 'react';
import Questions from './Questions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as quizActions from '../../actions/quizActions';
import TextInput from '../common/TextInput';
import toastr from 'toastr';


class QuestionForm extends React.Component {

    constructor(props, context) {
        super(props, context);

        // vezivanje metoda za komponentu
        this.addQuestion = this.addQuestion.bind(this);
        this.removeQuestion = this.removeQuestion.bind(this);
        this.id = this.id.bind(this);
        this.createQuiz = this.createQuiz.bind(this);
        this.handleChange = this.handleChange.bind(this);

        // stanje pri ucitavanju komponente
        this.state = {
            numQuestion: 0,
            questions: [],
            title: ''
        };
    }

    // hendler kom je podeseno stanje na vrednost title(Naslova)
    handleChange(event) {
        this.setState({ title: event.target.value });
    }

    // render metoda koja pokazuje sadrzaj komponente
    render() {
        return (
            <div className="panel-body">
                <div className="panel panel-default nested-fields">
                    <div className="panel-body">
                        {
                            /*
                             TextInput sa atributima,
                             onChange vrsi promenu koristeci metodu handleChange
                             */
                        }
                        <TextInput
                            name="title"
                            label="Title"
                            value={this.state.title}
                            onChange={this.handleChange} />
                    </div>
                </div>
                <div>
                    {
                        /*
                        element koji prikazuje broj pitanja, ako je ima vise pitanja,
                        uradice map funkciju(procice kroz sva pitanja) i pokazati ukupan broj pitanja
                         */

                        /*
                        Question element je Question komponenta ima svoj sadrzaj
                        */
                    }
                    {
                        (this.state.questions.length) ? this.state.questions.map(
                            (question, i) =>
                                <Questions key={question.id} id={question.id} removeQuestion={this.removeQuestion} />
                        ) : <span>Currently 0 Questions </span>
                    }
                </div>
                {
                    /*
                    onClick aktivira metodu handleChange
                    */
                }
                <input
                    type="submit"
                    value="Add Question"
                    className="btn btn-default"
                    onClick={this.addQuestion} />
                <div className="form-actions">
                    <hr />
                    {
                        /*
                        onClick aktivira metodu createQuiz
                        */
                    }
                    <input type="submit"
                        value="Create Quiz"
                        className="btn btn-primary"
                        onClick={this.createQuiz} />
                </div>
            </div>
        );
    }

    // removeQuestion je moetoda koja sluzi za brisanje Question-a,
    // brise tako sto filtira question, ako question.id nma vrednost id,
    // question se brsie i vraca se novo stanje(prazno)

    removeQuestion(id) {
        const questions = this.state.questions.filter(
            question => question.id != id);
        this.setState({ questions });
    }


    // addQuestion je metoda za kreiranje pitanja,
    // kreira se questions, dodaje id>ID, zatm se vraca novi state u kom su unete vrednosti

    addQuestion() {
        const ID = this.id();
        const questions = [
            ...this.state.questions,
            { id: ID }
        ];
        this.setState({
            questions
        });
    }


    // id, na nasumican nacin kreira id
    id() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    // pripremanje podataka za zahtev,
    // quiz ima svoje vrednosti,
    // forEach radi slicno kao for petlja, u question-u se answer filtrira, tako sto se gleda id(da bude striktno jednak),
    // zatim se kroz qs keira klon objekat question, koji sadrzi answerse,
    // nakon toga se se preko push komande prikazuje questions.
    // na kraju se vraca kviz sa vrednostima

    prepareDataForRequest(quizTitle, qa, an) {
        let quiz = {
            id: this.id(),
            title: quizTitle,
            questions: []
        };
        qa.forEach(question => {
            let answers = an.filter(answer => answer.questionId === question.id);

            // Uvek moramo da posaljemo kopiju objekta od props-a i state-a ...
            //console.log(answers, " is reducers ");

            let qs = Object.assign({}, question);
            qs.answers = [...answers];
            // console.log(quiz);
        });
        return quiz;
    }


    // createQuiz metoda je za kreiranje Quiz-a,
    // pervo elementi imaju vrenost kaja je zadata prilikom ucitavanaja komponente, tj prazno,
    // zatim se kroz data element uzamju vrednosti koje su naknadno unete
    // kroz akciju saveQuiz se krira kviz i izbacuje poruka kroz toaster (stilizovan prikaz) da je uspesno odradjeno,
    // u suprotonom prikazuje gresku
    createQuiz() {
        console.log("udjem ovde");
        let answers = this.props.answers;
        let questions = this.props.questions;
        let quizTitle = this.state.title;
        let data = this.prepareDataForRequest(quizTitle, questions, answers);

        let json = JSON.stringify(data);
        console.log(json);
        this.props.actions.saveQuiz(data).then(() => {
            toastr.success("zavrseno cuvanje");
        })
            .catch(error => {
                toastr.error(error);
                // console.log("greske prilikom cuvanja quiz-a");
            });
    }
}

// u ovom slucaju koristi se vise stanja,
// zbog lakse manipulacije oba stanja se stavaljju u jedan element res,

function mapStateToProps(state, ownProps) {
    let res = {
        questions: state.questions,
        answers: state.answers
    };
    return res;
}

// mapDispatchToProps vezuje (bindActionCreators) akciju(quizActions) i poziva je
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(quizActions, dispatch)
    };
}

// connect za povezivanje funkcija mapStateToProps i mapDispatchToProps za ovu komponentu
export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);