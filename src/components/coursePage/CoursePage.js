import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


// komponenta Courses
class CoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        const { coursePages } = this.props;

        // poziva se komponenta CoursesCard
        return (
            <div>
                <div>
                    <h1>Course Page</h1>
                </div>
            </div>
        );
    }
}

export default CoursePage;
