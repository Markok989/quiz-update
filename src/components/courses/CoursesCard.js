import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CoursesCardRow from './CoursesCardRow';

// komponenta CoursesCard
const CoursesCard = ({ courses }) => {
    return (
        <div>
            {
                /*
                pristupa se sadrzaju coures preko map(parametar course),
                ulazi se u komponentu CoursesCardRow gde je definisano key i courses
                */
            }
            {courses.map(course =>
                <CoursesCardRow key={course.id} course={course} />
            )}
        </div>
    );
};

// provera izlaznoh vrednosti komponente
CoursesCard.propTypes = {
    courses: PropTypes.array.isRequired
};


export default CoursesCard;

