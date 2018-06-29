import React, { Component } from 'react';

class Sum extends Component {
    constructor() {
        super();

        this.state = {
            number1 : 0,
            number2 : 0,
            sum : null
        };
    }

    updateNum1(num) {
        this.setState({
            number1: Number(num)
        });
    }

    updateNum2(num) {
        this.setState({
            number2: Number(num)
        });
    }

    sum() {
        let total = this.state.number1 + this.state.number2;
        this.setState({
            sum: total
        });
    }

    render() {
        return(
            <div className="puzzleBox sumPB">
                <h4> Sum </h4>
                <input type="number" className="inputLine"
                onChange={(e) => this.updateNum1(e.target.value)}/>
                <input type="number" className="inputLine"
                onChange={(e) => this.updateNum2(e.target.value)}/>
                <button className="confirmationButton"
                onClick={() => this.sum()}> Add </button>
                <span className="resultsBox"> Sum: {this.state.sum}</span>
            </div>
        );
    }
}

export default Sum;