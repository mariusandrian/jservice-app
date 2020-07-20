import React, { Component } from 'react'

export class ScoreBoard extends Component {
    constructor(props) {
        super(props)
    }
    handleClick = (event) => {
        switch (event.target.id) {
            case 'decrease':
                console.log('decrease');
                this.props.decreaseScore();
                break;
            case 'increase':
                console.log('increase');
                this.props.increaseScore();
                break;
            case 'reset':
                this.props.resetScore();
                break;
        }
    }
    render() {
        return (
            <div className="score-board">
                <h2><span className="title">Score : </span> {this.props.score}</h2>
                    <button id="decrease" onClick={this.handleClick}>Decrease</button>
                    <button id="increase" onClick={this.handleClick}>Increase</button>
                    <button id="reset" onClick={this.handleClick}>Reset</button>
            </div>
        )
    }
}

export default ScoreBoard
