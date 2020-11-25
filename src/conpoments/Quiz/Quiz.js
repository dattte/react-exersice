import './Quiz.css';
import React from 'react';

class Quiz extends React.Component {
  render() {
    return (
      <div className="wrapper-quiz">
        <div class="quiz-process">
            <div class="content">
                <h1>Reactjs Quiz</h1>
            </div>
            <div class="process"></div>
            <div class="complete">
                <h1>0% Complete</h1>
            </div>
        </div>
        <div class="quiz-question">
            <div class="question">
                <h1>What is the full form of HTTP</h1>
            </div>
            <div class="answer">
                <h1>A.</h1>
            </div>
            <div class="answer">
                <h1>B.</h1>
            </div>
            <div class="answer">
                <h1>C.</h1>
            </div>
            <div class="answer">
                <h1>D.</h1>
            </div>
        </div>
        <div class="quiz-action">
            <button>Back</button>
            <button>Skip</button>
        </div>
      </div>
    );
  }
}

export default Quiz;
