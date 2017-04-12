import React, { Component } from 'react';
import {connect} from 'react-redux';
import Lecture from '../components/Lecture';

function mapStateToPros(state) {
  return {
    lectures: state.lectures,
    teachers: state.teachers,
    rooms: state.rooms,
    schools: state.schools
  }
}


class Lectures extends Component {
  __getName(data, id) {
    let name = '';

    if (id instanceof Array) {
       id.forEach(itemId => {
         name += data.reduce((name, item) => {
          if (item.id === itemId) {
            name = item.name + ', ';
          }

          return name;
        }, '');
       });

       return name;
    } else {
      return data.reduce((name, item) => {
        if (item.id === id) {
          name = item.name;
        }
        return name;
      }, name);
    }
  }

  render() {
    return(
      <section>
        {this.props.lectures.map(lecture => (
          <Lecture
            key={lecture.id}
            name={lecture.name}
            src={lecture.src}
            data={lecture.start}
            teacher={this.__getName(this.props.teachers, lecture.teacherId)}
            room={this.__getName(this.props.rooms, lecture.roomId)}
            schools={this.__getName(this.props.schools, lecture.schoolsId)}
          />
        ))}
      </section>
    );
  }
}

export default connect(mapStateToPros)(Lectures);

