import React, { Component } from 'react'

export class QuestionBlock extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isAnswerRevealed: false
        }
    }
    handleClick = () => {
        this.setState({isAnswerRevealed: !this.state.isAnswerRevealed});
    }
    render() {
        return (
            <div className="ques-block">
                <h3>Category: {this.props.question.category.title}</h3>
                <h3>Points: {this.props.question.value}</h3>
                <h3>Question: {this.props.question.question}</h3>
                <button variant="contained" color="primary" onClick={this.handleClick}>{!this.state.isAnswerRevealed ? 'Click to Reveal Answer' : 'Click to Hide Answer'}</button>
                {!this.state.isAnswerRevealed ? '' : 
                    <h3>Answer: {this.props.question.answer}</h3>
                }
            </div>
        )
    }
}

export default QuestionBlock
