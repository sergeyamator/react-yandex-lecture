import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import LectureFrom from '../components/LectureForm';

import Lectures from './Lectures';

class App extends Component {
  render () {
    return (
      <div className='main-app-container'>
        <div className='main-title'>Yandex Lessons</div>
        <Lectures />
        {this.props.lecturesForm.isOpened ?
          <LectureFrom
            onSave={this.props.onSave}
            onClose={this.props.onClose}
          />
          : null
        }
        <Footer />
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    lectures: state.lectures,
    lecturesForm: state.lecturesForm
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onSave: () => {

    },
    onClose: () => {

    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
