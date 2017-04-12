import React, { Component } from 'react';
import {connect} from 'react-redux';
import Lecture from '../components/Lecture';

function mapStateToPros(state) {
  return {
    lectures: state.lectures,
    teachers: state.teachers,
    rooms: state.rooms
  }
}


class Lectures extends Component {
  __getName(data, id) {
    return data.reduce((name, item) => {
       if (item.id === id) {
         name = item.name;
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
            data={lecture.start}
            teacher={this.__getName(this.props.lectures, lecture.teacherId)}
            room={this.__getName(this.props.rooms, lecture.roomId)}
          />
        ))}
      </section>
    );
  }
}

export default connect(mapStateToPros)(Lectures);

