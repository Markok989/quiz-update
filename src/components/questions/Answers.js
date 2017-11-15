import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextInput from '../common/TextInput';
import * as answerActions from '../../actions/answerActions';


class Answers extends React.Component {
    constructor(props) {
        super(props);

        // pocetni state komponente
        this.state = {
            questionId: '',
            id: '',
            answer: '',
            isTrue: false
        };

        // vezivanje metode za komponentu
        this.handleChange = this.handleChange.bind(this);
    }

    // renderuje komponentu ako je state.id===(striktno) '' kao i state.questionId==='', 
    // i prikazuje novo stanje
    componentWillMount() {
        if (this.state.id === '' && this.state.questionId === '') {
            this.setState(
                {
                    id: this.props.id,
                    questionId: this.props.questionId,
                    isTrue: this.props.isTrue
                }
            );
        }
    }

    // update-uje stanje , koristeci akciju updateAnswerSuccess
    componentDidMount() {
        this.props.actions.updateAnswerSuccess({
            questionId: this.state.questionId,
            id: this.state.id,
            label: this.state.answer,
            isTrue: this.props.isTrue
        });
    }

    // metoda za prikazivanje trenutne vrednosti naslova
    handleChange(event) {
        this.setState({ answer: event.target.value });
    }

    render() {

        const { id, removeAnswer, questionId, setAnswerOnTrue, isTrue } = this.props;

        return (
            <div className="panel panel-default nested-fields">
                <div className="panel-body">
                    {
                        /*
                        pozivanje komponente TextInput sa atributima,
                        vrednost je trenutna vrednost answer-a
                        onChange: koristi metodu handleChange za promenu stanja
                        */
                    }
                    <TextInput
                        name="answer"
                        label="Answer"
                        value={this.state.answer}
                        onChange={this.handleChange} />
                    {
                        /*
                        plje za unos input:
                            type: submit tipa,
                            value: vrednost,
                            className: stilizovanje,
                            onClick: primenjuje se metoda removeAnswer
                        */
                    }
                    <input
                        type="submit"
                        value="Remove Answer"
                        className="btn btn-default"
                        onClick={() => removeAnswer(id)} />
                    {
                        /*
                        button element(dugme),
                        onClick se primenjuje setAnswerOnTrue,
                        className: ima dva slucaja za stilizovanje, jedno kad je odgovor tacan,
                                    drugo kad odgovor nije tacan,
                        span element: takodje stilizovan za dva slucaja, kad je odgovor true i kad je odgovor false,
                        zatim se ispistuje poruka ako je odgovor tacan" Answer is true" i 
                                "Answer is false" za ne tacan odgovor (false)
                        */
                    }
                    <button type="button"
                        onClick={() => setAnswerOnTrue(id)}
                        className={isTrue ? "btn btn-success" : "btn btn-danger"}>
                        <span className={isTrue ? "glyphicon glyphicon-ok-circle" : "glyphicon glyphicon-remove-circle"}></span>
                        {isTrue ? "Answer is true" : "Answer is false"}
                    </button>
                </div>
            </div>
        );
    }
}


// mapDispatchToProps vezuje komponentu za akciju i koja se akcija primenjuje,
// answeractions je akcija koja se koristi, a dispatch je doprema
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(answerActions, dispatch)
    };
}

// connect se koristi da se spoji(koristi) mapDispatchToProps u komponenti,
// null je iz razloga sto se ne koristi mapStateToProps, koja ima funkciju da spaja komponentu sa reduxom

export default connect(null, mapDispatchToProps)(Answers);

