import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import Footer from '../components/Footer';

import Lectures from './Lectures';

class App extends Component {
  render () {
    return (
      <div className='main-app-container'>
        <div className='main-title'>Yandex Lessons</div>
        <Lectures />
        <Footer />
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    lectures: state.lectures
  }
}

function mapDispatchToProps (dispatch) {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
