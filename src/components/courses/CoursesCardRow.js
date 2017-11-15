import React, { PropTypes } from 'react';
//import {Link} from 'react-router';

/*
komponenta CoursesCardRow,
definisan je kostru komponente i sadrzaj,
pristupa se delovima json-a(course.title i course.category)
*/
const CoursesCardRow = ({ course }) => {
    return (
        <div>
            <div>
                <div>
                    <div className="grid">
                        <div className="col-sm-4">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    {course.title}
                                </div>
                                <div className="panel-body">
                                    picture/text proba
                                </div>
                                <div className="panel-footer">
                                    {course.category}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>
    );
};

// provera izlaznih vrednosti
CoursesCardRow.propTypes = {
    course: PropTypes.array.isRequired
};


export default CoursesCardRow;
