import React, { Component } from 'react';
import {connect} from 'react-redux';
import Lecture from '../components/Lecture';

function mapStateToPros(state) {
  return {
    lectures: state.lectures,
    teachers: state.teachers
  }
}


class Lectures extends Component {
  __getTeacherName(id) {
    return this.props.teachers.reduce((name, teacher) => {
       if (teacher.id === id) {
         name = teacher.name;
       }

       return name;
    }, '');
  }

  render() {
    return(
      <section>
        {this.props.lectures.map(lecture => (
          <Lecture
            key={lecture.id}
            name={lecture.name}
            src={lecture.src}
            teacher={this.__getTeacherName(lecture.teacherId)}
          />
        ))}
      </section>
    );
  }
}

export default connect(mapStateToPros)(Lectures);

