import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CoursesCard from './CoursesCard';
import { browserHistory } from 'react-router';
import * as coursesActions from '../../actions/coursesActions';


class Courses extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { courses } = this.props;

        return (
            <div>
                <h1>All Coures</h1>
                <CoursesCard courses={courses} />
            </div>
        );
    }
}

// provera izlaznih vrednosti
Courses.propTypes = {
    courses: PropTypes.array.isRequired
};

// funckija za prikaz odredjenog reduxa iz store
function mapStateToProps(state, ownProps) {
    console.log("provera za test" + JSON.stringify(state));
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps)(Courses);
