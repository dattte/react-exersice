import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Students extends Component {
  componentWillUnmount() {
    console.log("componetWillUnmount")
  }
  render() {
    const { students } = this.props
    return (
      <>
        <h1>List users</h1>
        <button onClick={this.props.getGreaterThan5}>Hiển thị danh sách</button>
        <ul>
          {
            students.map(students => {
              return <li key={students.id}>{students.id} | {students.name} | {students.score}</li>
            })
          }
        </ul>
      </>
    )
  }
}

Students.propTypes = {
  students: PropTypes.array,
  getGreaterThan5: PropTypes.func.isRequired
}

Students.defaultProps = {
  students: [],
}
export default Students
