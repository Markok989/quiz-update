import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as questionActions from '../../actions/questionActions';
import Answers from './Answers';
import TextInput from '../common/TextInput';

class Questions extends React.Component {

    // konstruktor komponente
    constructor(props) {
        super(props);

        // defininisani state pilikom ucitavanja komponente
        this.state = {
            id: '',
            question: '',
            numAnswers: 1,
            answers: []
        };

        // bind omogucava stvaranje kopije fukncije kada je ta fukcija pozvana
        this.addAnswer = this.addAnswer.bind(this);
        this.removeAnswer = this.removeAnswer.bind(this);
        this.id = this.id.bind(this);
        this.setAnswerOnTrue = this.setAnswerOnTrue.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // metoda koja prikazuje trenutnu vrednost naslova
    handleChange(ecent) {
        this.setState({ question: event.target.value });
    }

    // pre samog renderovanja setuje se state,
    // pod uslovm ako je state.id striktno jednak praznom stringu,
    // setuje se state id: this.props.id
    componentWillMount() {
        if (this.state.id === '') {
            this.setState({ id: this.props.id });
        }
    }

    // update-uje stanje koristeci akciju updateQuestionSuccess
    componentDidMount() {
        this.props.actions.updateQuestionSuccess({
            id: this.state.id,
            value: this.state.question
        });
    }


    render() {
        // id i removeQuestion su definisani kao props
        const { id, removeQuestion } = this.props;

        return (
            <div className="panel panel-default nested-fields">
                <div className="panel-body">
                    {
                        /*
                        poziva se komponenta TextInput sa atributima,
                            vrednost je trenutna vrednost answer-a
                            onChange: koristi metodu handleChange za promenu stanja                        
                        */
                    }
                    <TextInput
                        name="question"
                        label="question"
                        value={this.state.question}
                        onChange={this.handleChange} />
                    <div>
                        {
                            /*
                            element za prikaz broja pitanja, u slucaju da ima vise pitanja prolazi se kroz njih preko .map sa parametrima answer i "i",
                            ulazi u komponentu Answers sa atributima,
                                key: sortira po answer.id,
                                removeAnswer: primenjuje se metoda removeAnswer,
                                questionId: prikazuje id pitanja,
                                setAnswerOnTrue: primejuje metodu setAnswerOnTrue,
                                isTrue: prikazuje vrednost odgovora(true/false)
                            */
                        }
                        {
                            (this.state.answers.length) ? this.state.answers.map((answer, i) =>
                                <Answers
                                    key={answer.id}
                                    id={answer.id}
                                    removeAnswer={this.removeAnswer}
                                    questionId={this.state.id}
                                    setAnswerOnTrue={this.setAnswerOnTrue}
                                    isTrue={answer.isTrue} />
                            )
                                :
                                <span> Currently 0 Answers </span>
                        }
                    </div>
                    {
                        /*
                        input element sa atributima koji sluzi za brisanje pitanja
                        */
                    }
                    <input
                        type="submit"
                        value="Remove Question"
                        className="btn btn-default"
                        onClick={() => removeQuestion(id)} />
                    {
                        /*
                        element sa atrubutima koji na klik omogucava dodavanje odgovora
                        */
                    }
                    <input
                        type="submit"
                        value="Add Answer"
                        className="btn btn-default"
                        onClick={this.addAnswer} />
                </div>
            </div>
        );
    }

    // metoda za brisanje odgovora, 
    // uslov , ako je duzina/broj pitanja vece od nule primenjuje se sledece:
    //      answers se filtrira preko parametra answer, gleda sda answer.id ne bude id
    // setuje se state sa answers vrednostima
    removeAnswer(id) {
        if (this.state.answers.length > 0) {
            const answers = this.state.answers.filter((answer) => answer.id != id);
            this.setState({ answers });
        }
    }

    //metoda za dodelu vrednosti odgovra(true/false)
    // prolazi se kroz sve vrednosti ansera preko .map sa parametrom answer,
    // answer ima vrednost da nije answer.isTrue, preko negacije automatski dobija vrednost true,
    // i vraca se answer,
    // u suprotnom answer ima vrednost false
    setAnswerOnTrue(id) {

        const answers = [...this.state.answers.map((answer) => {
            if (answer.id === id) {
                answer.isTrue = (!answer.isTrue);
                return answer;
            } else {
                answer.isTrue = false;
                return answer;
            }
        })];

        // setuje se state sa answers vrdnostima
        this.setState({ answers });
    }


    // metoda za dodavanje odgovora,
    // ID uzima vrednost id iz metode koja nasumicno stvara id,
    // answer dobija nove vrednosti u odnosu pocetni state,
    // na kraju se vraca odgvor sa novim state
    addAnswer() {
        const ID = this.id();
        const answers = [
            ...this.state.answers,
            { id: ID, isTrue: false }
        ];
        this.setState({
            answers
        });
    }
    // nasumicno kreiranje ID
    id() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
}

// Provera u konzoli za izlazni rezultat
Questions.propTypes = {
    id: PropTypes.string.isRequired,
    removeQuestion: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired
};

// metoda za povezivanje odredje akcije u ovom slucaju questionActions
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(questionActions, dispatch)
    };
}


// connect povezuje metodu mapDispatchToProps sa komponentom
export default connect(null, mapDispatchToProps)(Questions);