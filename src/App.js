import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import ScoreBoard from './components/ScoreBoard'
import QuestionBlock from './components/QuestionBlock'
import './App.css';

export class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      questions: [],
      score: 0
    }
  }
  getQuestion = (event) => {
    let tenURL = ''
    if (event.target.id === 'tenQuestions') tenURL = '?count=10';

    this.setState({
      searchURL: 'http://jservice.io/api/random' + tenURL
    }, async () => {
      try {
        const response = await fetch(this.state.searchURL);
        const result = await response.json();
        this.setState({questions: result})
      } catch(err) {
        console.log(err);
      }
    })
  }
  resetScore = () => {
    this.setState({score: 0});
  }
  decreaseScore = () => {
    
    if (this.state.score > 0) {
      let newScore = this.state.score - 1
      this.setState({score: newScore});
    }
  }
  increaseScore = () => {
    let newScore = this.state.score + 1;
    this.setState({score: newScore});
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome to Jeopardy!</h1>
        <ScoreBoard 
          score={this.state.score} 
          decreaseScore={this.decreaseScore} 
          increaseScore={this.increaseScore}
          resetScore={this.resetScore}
        />
        <h2>Let's Play!</h2>
        <div className="ques-button-container">
          <button onClick={this.getQuestion}>Get Question</button>
          <button id="tenQuestions" onClick={this.getQuestion}>Hard Mode: Get 10 Questions</button>
        </div>
        {this.state.questions.map((question, index) => {
            return (
              <QuestionBlock key={question.id} index={index} question={question}/>
            )
          })
        }
      </div>
    )
  }
}

export default App
