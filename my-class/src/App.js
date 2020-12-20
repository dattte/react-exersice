import React from 'react';
import Students from './conpoments/Students';
import students from './constants/Menu'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      students
    }
  }

  getGreaterThan5 = () => {
    this.setState({
      students: this.state.students.filter(s => s.score > 5)
    })
  } 

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldcomponetnupdate")
    console.log({
      oldState: this.state,
      nextState,
      oldProps: this.props,
      nextProps
    })
    return false
  }

  componentWillMount() {
    this.setState({
      isShowStudents:true
    })
    console.log("--componentWillMount")
  }

  componentDidMount() {
    console.log("---componentDidMount---")
  }

  removeStudents = () => {
    this.setState({
      isShowStudents: false
    })
  }

  render() {
    console.log("--componentWillMount")

    return (
      <div>
        <button onClick={this.removeStudents}>Xóa students</button>
        {
          this.state.isShowStudents &&
          <Students
            students= {this.state.students}
            getGreaterThan5 = {this.getGreaterThan5} />
        }
        <Students
          getGreaterThan5 = {this.getGreaterThan5} />
      </div>
    )
  }
}

export default App;
